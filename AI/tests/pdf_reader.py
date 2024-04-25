import argparse
import pdf2image
from PIL import Image
import pytesseract
import os
import sys
import time
import collections

def pdf_to_img(pdf_file):
    # Turns the pdf to images. PIL images.
    return pdf2image.convert_from_path(pdf_file)

def ocr_core(file):
    # Calls the OCR on a provided file image
    text = pytesseract.image_to_string(file)
    return text

def convert_pages(pdf_file, written_file):
    # First convert pdf to image
    images = pdf_to_img(pdf_file)

    # Then use the tesseract OCR to extract the text
    text = ""
    for pg, img in enumerate(images):
        # Each page is individually turned into text and written into a file called "text.txt"
        text += "page " + str(pg) + ocr_core(img) + '\n'
    try:
        with open(written_file, 'x') as file:
            pass
            # You can perform other operations on the file here
    except FileExistsError:
        pass
    with open(written_file, 'w') as f:
        f.write(text)
    

def main():
    directory = './files/'
    otherdir = './processed/'
    # Iterate through all the files in the directory
    # Get the current working directory
    current_dir = os.getcwd()

    # Add the current working directory to the Python path
    sys.path.append(current_dir)
    while (1):
        print("monitoring for pdfs!")
        dirr = os.listdir(directory)
        check = os.listdir(otherdir)
        done = collections.defaultdict(bool)    # a hash map of files that already exist
        for filename in check:
            filepath = os.path.join(directory, filename)
            
            # if os.path.isfile(filepath):
            fname = filepath.split("/")[-1]
            fname = fname[:len(fname)-4]
            
            done[fname] = True

        for filename in dirr:
            filepath = os.path.join(directory, filename)

            if (filepath == r"./files/.gitkeep"):
                continue

            if os.path.isfile(filepath):
                fname = filepath.split("/")[-1]
                print(fname)
                # fname = fname[:len(fname)-4]
                if (done[fname]):   # remove the file if it already exists
                    os.remove(filepath)
                else:
                    convert_pages(filepath, f"./output/{fname}.txt")

                    # Construct the destination file path
                    destination_file = os.path.join(otherdir, os.path.basename(filepath))

                    # Move the file
                    os.rename(filepath, destination_file)
        time.sleep(3)
        
    


# if __name__ == "__main__":
    
#     directory = './files'

#     # Iterate through all the files in the directory
#     for filename in os.listdir(directory):
#         filepath = os.path.join(directory, filename)
        
#         if os.path.isfile(filepath):
#             print("hello", filepath)
#             print_pages(filepath, "./output/content.txt")