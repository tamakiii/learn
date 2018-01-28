#!/usr/bin/env sh

curl -s $1 | node src/striptags.js | jumanpp

