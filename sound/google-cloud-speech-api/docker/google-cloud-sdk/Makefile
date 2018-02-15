ROOT      := $(shell realpath ../..)
COMPOSE   := docker-compose --project-directory $(ROOT)
CONTAINER := google-cloud-sdk
GCLOUD    := $(COMPOSE) run $(CONTAINER) gcloud

gcloud/help:
	$(GCLOUD) --help
