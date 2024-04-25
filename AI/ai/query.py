import ollama
import chromadb

def main():
    chroma = chromadb.HttpClient(host="localhost", port=6000)
    collection = chroma.get_or_create_collection("test")
    
    query = input('What would you like to know about the text? ')
    promt_embedding = [
        ollama.embeddings(model = 'nomic-embed-text', prompt=query)['embedding']
        ]
    
    relevantdocs = collection.query(query_embeddings=promt_embedding, n_results=10)["documents"][0]
    print([item[1] for item in relevantdocs])
    print(relevantdocs)