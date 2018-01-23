ROOT_DIR  := $(realpath $(dir $(lastword $(MAKEFILE_LIST))))
CONTAINER := tamakiii/try-language-go-echo
CONTAINER_ID ?= $(shell docker ps -q -f ancestor=${CONTAINER})

build:
	docker build -t ${CONTAINER} .

run: stop
	docker run -it -v ${ROOT_DIR}:/volumes/echo -p 1323:1323 ${CONTAINER}

login:
	docker exec -it ${CONTAINER_ID} ash

stop:
	if [ ! "${CONTAINER_ID}" = "" ]; then docker stop -t 1 ${CONTAINER_ID}; fi
