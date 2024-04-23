import argparse
import pdf2image
from PIL import Image
import pytesseract
import os

def pdf_to_img(pdf_file):
    # Turns the pdf to images. PIL images.
    return pdf2image.convert_from_path(pdf_file, poppler_path=r"C:\ProgramData\poppler-24.02.0\Library\bin")

def ocr_core(file):
    # Calls the OCR on a provided file image
    text = pytesseract.image_to_string(file)
    return text

def print_pages(pdf_file, written_file):
    # First convert pdf to image
    images = pdf_to_img(pdf_file)
    try:
        with open(written_file, 'x') as file:
            pass
            # You can perform other operations on the file here
    except FileExistsError:
        pass

    # Then use the tesseract OCR to extract the text
    with open(written_file, 'a') as f:

        for pg, img in enumerate(images):
            # Each page is individually turned into text and written into a file called "text.txt"
            f.write("page " + str(pg) + ocr_core(img) + '\n')

def main(pdf_file, written_file):
    print_pages(pdf_file, written_file)

if __name__ == "__main__":
    
    directory = './files'

    # Iterate through all the files in the directory
    for filename in os.listdir(directory):
        filepath = os.path.join(directory, filename)
        
        if os.path.isfile(filepath):
            print("hello", filepath)
            print_pages(filepath, "./output/content.txt")
