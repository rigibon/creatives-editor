FROM ghcr.io/puppeteer/puppeteer:22.6.5
USER root

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

# Switch to root user


COPY package*.json ./
RUN npm ci

# Copy files and set permissions as root
COPY . .
RUN chown -R root:root /usr/src/app/public

CMD ["node", "application.js"]