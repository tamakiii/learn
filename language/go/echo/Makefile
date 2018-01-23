ROOT_DIR  := $(realpath $(dir $(lastword $(MAKEFILE_LIST))))
CONTAINER := tamakiii/try-language-go-echo

build:
	docker build -t ${CONTAINER} .

run:
	docker run -v ${ROOT_DIR}/src:/volumes/echo -p 1323:1323 -it ${CONTAINER} ash

