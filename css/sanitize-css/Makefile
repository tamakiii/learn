NODE := $(shell which node)
BIN_DIR := $(shell realpath node_modules/.bin)

install: setup
	npm install
	cp node_modules/sanitize.css/sanitize.css dist/vendor/sanitize.css/sanitize.css

setup:
	mkdir -p dist/vendor/sanitize.css

server:
	$(NODE) $(BIN_DIR)/http-server dist -p 8080

