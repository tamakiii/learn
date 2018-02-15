# Google Cloud Speech API

## Dependencies
- Docker
- Docker Compose
- Make

## How to use
gcloud
~~~sh
bin/gcloud --help
bin/gcloud auth login
bin/gcloud config set project PROJECT_ID
bin/gcloud services list --available
~~~

mp3splt
~~~sh
bin/mp3splt -h
bin/mp3splt -S 60 test.mp3
~~~

