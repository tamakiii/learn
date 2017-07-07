.PHONY: server kill-server

server:
	php -S tmp.local:8880 -t tmp.local &
	php -S sub.tmp.local:8881 -t sub.tmp.local &

kill-server:
	ps aux | grep 'php -S' | grep 'tmp.local' | awk '{print $$2}' | xargs kill

