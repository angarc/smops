FROM tiangolo/uwsgi-nginx-flask:python3.8

ENV BUNDLER_VERSION=2.0.2


WORKDIR /app



#Basic installs
RUN apt-get update \
    && apt-get install -y python3-pip


COPY requirements.txt .

RUN set -x \
    && pip3 install --upgrade -r requirements.txt
COPY . .
RUN set -x \
    # Set permissions
    && chmod +x entrypoint.sh

EXPOSE 5000
CMD ["./entrypoint.sh"]
