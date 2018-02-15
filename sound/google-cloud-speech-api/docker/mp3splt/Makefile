ROOT      := $(shell realpath ../..)
COMPOSE   := docker-compose --project-directory $(ROOT)
CONTAINER := mp3splt
MP3SPLT   := $(COMPOSE) run $(CONTAINER) mp3splt

help:
	$(MP3SPLT) -h

split-eq: require/COUNT require/TARGET
	$(MP3SPLT) -S $(COUNT) $(TARGET)

require/%:
	@if [ -z "$($(@F))" ]; then echo "$(@F) is required. $($(@F))" && exit 1; fi
