NODE := $(shell which node)
BIN_DIR := $(shell realpath node_modules/.bin)

install: setup
	npm install
	cp node_modules/sanitize.css/sanitize.css dist/vendor/sanitize.css/sanitize.css
	cp node_modules/jquery/dist/jquery.min.js dist/vendor/jquery/jquery.min.js

setup:
	mkdir -p dist/vendor/{jquery,sanitize.css}

server:
	$(NODE) $(BIN_DIR)/http-server dist -p 8080

