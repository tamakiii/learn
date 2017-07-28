#!/usr/bin/env sh

if [ -p /dev/stdin ]; then
  cat - | node src/parse.js
fi
