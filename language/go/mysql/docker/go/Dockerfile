FROM golang:1.9.2-alpine3.7

RUN apk add --update git

RUN go get github.com/go-sql-driver/mysql

ENTRYPOINT tail -f /dev/null
