# @link https://qiita.com/diamonddai/items/0d4d19b5cb663670be66
FROM alpine:latest

RUN apk add --update build-base git bash curl file openssl sudo

RUN cd /tmp && git clone https://github.com/taku910/mecab.git && cd mecab/mecab && \
    ./configure  --enable-utf8-only && make && make install && \
    rm -rf  /tmp/mecab

RUN cd /tmp && git clone https://github.com/neologd/mecab-ipadic-neologd.git && cd mecab-ipadic-neologd && \
    bin/install-mecab-ipadic-neologd -n -y && \
    rm -rf /tmp/mecab-ipadic-neologd
