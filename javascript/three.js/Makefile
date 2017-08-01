
NPM := $(shell npm bin)

install: update
	npm install

update: setup
	npm update
	cp node_modules/three-js/three.js public/vendor/three-js/three.js

watch:
	npm run watch

build:
	npm run build

dev-server:
	npm run dev-server

setup:
	mkdir -p public/vendor/three-js

server:
	$(NPM)/http-server -p 8080 public

