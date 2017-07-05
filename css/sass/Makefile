.PHONY: install build

install:
	@gem install bundler
	@bundle install --path vendor/bundle

build:
	bundle exec sass src/sass/test.sass:dist/css/test.css

