FROM python:3.10.13-bookworm

# RUN apk add --no-cache gcc make automake g++ subversion musl-dev linux-headers libffi libffi-dev openssl-dev
# RUN apt-get install -y gcc make automake g++ subversion 
# RUN apt-get install -y libc-bin
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    software-properties-common \
    && rm -rf /var/lib/apt/lists/*
    
RUN pip install poetry==1.7.1

ENV PYTHONUNBUFFERED 1

WORKDIR /AIDES
COPY ../../AI/pyproject.toml ./
COPY ../../AI/poetry.lock ./

CMD poetry install;poetry run dev