FROM ubuntu:latest

WORKDIR /test
RUN apt-get update && apt install -y bash
COPY script.sh /test/script.sh
RUN chmod +x /test/script.sh
RUN /test/script.sh
CMD ["/test/script.sh"]
