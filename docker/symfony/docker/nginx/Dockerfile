FROM debian:stretch-slim

RUN set -x && apt update

RUN apt install --no-install-recommends --no-install-suggests -y nginx

RUN ln -sf /dev/stdout /var/log/nginx/access.log && \
    ln -sf /dev/stderr /var/log/nginx/error.log

COPY docker/nginx/etc/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/etc/nginx/sites-available/default /etc/nginx/sites-available/default

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
