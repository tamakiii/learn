.PHONY: build up ps rm

build:
	docker-compose build

up:
	docker-compose up

ps:
	docker ps --filter ancestor=step02_app
	@echo
	docker ps --filter ancestor=nginx

rm:
	docker rm -f $(CONTAINER)

