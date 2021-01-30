FROM tiangolo/uwsgi-nginx-flask:python3.8

ENV BUNDLER_VERSION=2.0.2


WORKDIR /app



#Basic installs
RUN apt-get update \
    && apt-get install -y python3-pip\
    && pip3 install virtualenv


COPY requirements.txt .

RUN set -x \
    # Create virtualenv
    && virtualenv -p python3 venv \
    # Install Python libs
    && . venv/bin/activate \
    && pip install --upgrade -r requirements.txt
COPY . .

EXPOSE 5000
CMD ["flask","run","--host=0.0.0.0"]