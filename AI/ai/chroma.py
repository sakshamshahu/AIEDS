import chromadb
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

def main():
    filename = 'ai/data/structured.txt'
    paragraphs = parse_file(filename)
    print(paragraphs[0],'\n',paragraphs[1])
    
    # client = chromadb.PersistentClient(path="/path/to/save/to")
    chroma_client = chromadb.HttpClient(host='localhost', port=8000)
    
    chroma_client.heartbeat()
    
    # Load a collection or create it if it doesn't exist
    collection = chroma_client.get_or_create_collection(name="test", metadata={"hnsw:space": "cosine"})
    
    print('Script Check')