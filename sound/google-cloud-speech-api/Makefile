NAME    := tamakiii/google-cloud-speech-api
VOLUME  := --volume $(PWD):/mnt/current
WORKDIR := --workdir /mnt/current

build:
	docker build -t $(NAME) .

run:
	docker run $(VOLUME) $(WORKDIR) -it $(NAME)

