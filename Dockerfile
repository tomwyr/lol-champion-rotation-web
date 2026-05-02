# syntax = docker/dockerfile:1

ARG NODE_VERSION=22.12.0
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Nuxt"

WORKDIR /app

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY package-lock.json package.json ./
RUN npm ci --include=dev
# Fix missing platform-specific binaries not included in lockfile
RUN npm install @oxc-parser/binding-linux-x64-gnu @oxc-transform/binding-linux-x64-gnu @oxc-minify/binding-linux-x64-gnu --no-save

# Copy application code
COPY . .

# Set up environment variables
ARG API_BASE_URL
ARG API_ACCESS_KEY
RUN echo "API_BASE_URL=$API_BASE_URL" >> .env && \
    echo "API_ACCESS_KEY=$API_ACCESS_KEY" >> .env

# Build application
RUN npm run build


# Final stage for app image
FROM base

WORKDIR /app
COPY --from=build /app/.output /app/.output

ENV NODE_ENV="production"
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
