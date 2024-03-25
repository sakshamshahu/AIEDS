from langchain.text_splitter import CharacterTextSplitter
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import TextLoader
from langchain_community.embeddings.sentence_transformer import (SentenceTransformerEmbeddings,)
from langchain_community.vectorstores import Chroma

def main():
    loader = TextLoader('ai/data/structured.txt')
    documents = loader.load()

    text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=500, chunk_overlap=0, separators=[",", "\n"]
    )
    # text_splitter = CharacterTextSplitter(chunk_size=50, chunk_overlap=0, separators=[" ", ",", "\n"]) # check func of this
    docs = text_splitter.split_documents(documents)

    embedding_function = SentenceTransformerEmbeddings(model_name="all-MiniLM-L6-v2")

    db = Chroma.from_documents(docs, embedding_function)

    query = "What is ventral stream?"
    docs = db.similarity_search(query)

    print(docs[0].page_content)