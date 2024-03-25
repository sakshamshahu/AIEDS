FROM python:3.10.13-alpine3.19

RUN pip install poetry==1.7.1

WORKDIR /AI
COPY ../../AI/pyproject.toml ./
COPY ../../AI/poetry.lock ./

CMD poetry install; poetry run dev