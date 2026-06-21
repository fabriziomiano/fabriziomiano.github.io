FROM node:22

RUN apt-get update \
  && apt-get install -y --no-install-recommends ruby-full build-essential zlib1g-dev \
  && rm -rf /var/lib/apt/lists/*

RUN gem install bundler -v 2.3.25

ENV BUNDLE_PATH=/bundle \
    BUNDLE_APP_CONFIG=/bundle/config

WORKDIR /site
