import chromadb


def main():
    # client = chromadb.PersistentClient(path="/path/to/save/to")
    chroma_client = chromadb.HttpClient(host='localhost', port=8000)
    
    chroma_client.heartbeat()
    
    # Load a collection or create it if it doesn't exist
    collection = chroma_client.get_or_create_collection(name="test", metadata={"hnsw:space": "cosine"})
    
    print('Script Check')