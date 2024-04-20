import chromadb
import ollama
import os

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

def get_embeddings(filename, modelname, chunks):
    # checking for already saved embeddings
    # if (embeddings := load_embeddings(filename)) is not False:
    #     return embeddings
    for index, chunk in enumerate(chunks):
        embeddings = [
            ollama.embeddings(model = modelname, prompt=chunk)['embedding']
        ]
        
    return embeddings

def main():
    filename = 'ai/data/structured.txt'
    embed_model = 'nomic-embed-text'
    
    # client = chromadb.PersistentClient(path="/path/to/save/to")
    chroma_client = chromadb.HttpClient(host='localhost', port=8000)
    
    chroma_client.heartbeat()
    
    # Load a collection or create it if it doesn't exist
    collection = chroma_client.get_or_create_collection(name="test", metadata={"hnsw:space": "cosine"})
    paragraphs = parse_file(filename)
    # print(paragraphs[0],'\n',paragraphs[1])
    
    # embeddings = get_embeddings(filename, 'nomic-embed-text', paragraphs)
    for index, chunk in enumerate(paragraphs):
        embeddings = [
            ollama.embeddings(model = embed_model, prompt=chunk)['embedding']
        ]
        collection.add([filename+str(index)], embeddings, documents=[chunk], metadatas={"source": filename})
    
    # print(type(embeddings), len(embeddings))
    print(collection.peek())
    
    
    print('Script Check')