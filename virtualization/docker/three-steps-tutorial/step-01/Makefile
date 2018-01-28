.PHONY: build run ps rm

build:
	docker build -t docker-sample:1.0 .

run:
	docker run docker-sample:1.0

ps:
	docker ps --filter ancestor=docker-sample:1.0

rm:
	docker rm -f $(CONTAINER)

