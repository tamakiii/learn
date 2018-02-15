shell/%:
	docker-compose run $(@F) grep -v '^#' /etc/shells | tail -n 1

login/%:
	docker-compose run $(@F) $(shell make -s shell/$(@F))
