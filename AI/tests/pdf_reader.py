import pdf2image
from PIL import Image
import pytesseract


def pdf_to_img(pdf_file):
    # turns the pdf to images. PIL images.
    return pdf2image.convert_from_path(pdf_file)


def ocr_core(file):
    # calls the OCR on a provided file image
    text = pytesseract.image_to_string(file)
    return text


def print_pages(pdf_file, written_file):
    # first convert pdf to image
    images = pdf_to_img(pdf_file)
    try:
        with open(written_file, 'x') as file:
            pass
            # You can perform other operations on the file here
    except FileExistsError:
        pass

    # then use the tesseract OCR to take out the text
    with open(written_file, 'a') as f:
        for pg, img in enumerate(images):
            # each page is individually turned into text and written into a file called "text.txt"
            f.write("page " + str(pg) + ocr_core(img) + '\n')

#### Set this env variable, otherwise the package will complain
#### likely (definitely) won't work out of the box
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"


pdf_name = input("Enter the name of the .pdf file:" ) + '.pdf'
written_file_name = input("Enter the name of the file to write to: (exclude the .txt)" ) + '.txt'
print_pages(pdf_name, written_file_name)