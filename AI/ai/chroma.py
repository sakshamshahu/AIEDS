import chromadb


def main():
    
    # client = chromadb.PersistentClient(path="/path/to/save/to")
    chroma_client = chromadb.HttpClient(host='localhost', port=8000)
    print('Script Check')