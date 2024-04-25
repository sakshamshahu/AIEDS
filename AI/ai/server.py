from flask import Flask, request, jsonify
import time
import random
import ollama
import chromadb

app = Flask(__name__)

chroma_client = chromadb.HttpClient(host='localhost', port=6000)

def parse_file(filename):
    with open(filename, encoding='utf-8-sig') as f:
        paragraphs = []
        buffer = []
        for line in f.readlines():
            line = line.strip()
            if line:
                buffer.append(line)
            elif len(buffer):
                paragraphs.append((' ').join(buffer))
                buffer = []
        if len(buffer): # if buffer is not empty after exiting loop append it to paragraphs
            paragraphs.append((' ').join(buffer))
        return paragraphs

@app.route('/', methods=['GET'])
def api_health_checker():
    response_data = {
        "success": True,
        "message": "Python flask backend is up and running!"
    }    
    return jsonify(response_data), 200


@app.route('/llm_reply', methods=['POST'])
def get_resource():
    json_data = request.json
    query = json_data.get('query')
    collection = chroma_client.get_or_create_collection(name="test", metadata={"hnsw:space": "cosine"})
    
    SYSTEM_PROMPT = """You are a helpful reading assistant who answers questions 
        based on snippets of text provided in context. Answer only using the context provided, 
        being as concise as possible. If you're unsure, just say that you don't know.
        Context:
    """
    
    file_names = json_data.get('filenames')
    out_files = file_names[-1]
    print(out_files)
    
    #/Users/saksham/Projects/AIDES/AI/output
    file_final = f'/Users/saksham/Projects/AIDES/AI/output/{out_files}.txt'
    
    paragraphs = parse_file(file_final)
    
    for index, chunk in enumerate(paragraphs):
        embeddings = [
            ollama.embeddings(model = 'nomic-embed-text' , prompt=chunk)['embedding']
        ]
        collection.add([file_final+str(index)], embeddings, documents=[chunk], metadatas={"source": file_final})
    
    promt_embedding = [
        ollama.embeddings(model = 'nomic-embed-text', prompt=query)['embedding']
        ]
    
    relevantdocs = collection.query(query_embeddings=promt_embedding, n_results=10)["documents"][0]
    
    
    random_messages = ["Hello!","How are you?","Good morning!","Have a nice day!","Welcome!","Greetings!","Nice to meet you!","What's up?","How's it going?","Cheers!","Good luck!","Take care!","Stay safe!","Best wishes!","Enjoy!","See you later!", "Bye!","Farewell!","Keep smiling!","You're awesome!"]

    response = ollama.chat(
            model= 'mistral-openorca',
            messages= [
                {
                    'role': 'system',
                    'content': SYSTEM_PROMPT + '\n'.join([item for item in relevantdocs]),
                },
                {
                    'role': 'user',
                    'content': query
                }, 
            ]
        )
    
    
    response_data = {
        "success": True,
        "query": query,
        "filename": file_names,
        "message": response['message']['content']
    }
    
    

    # call the LLM inference thing here. For now, I will sleep for 1 second
    time.sleep(1)

    return jsonify(response_data), 200


def main():
    
    app.run(debug=True)
    