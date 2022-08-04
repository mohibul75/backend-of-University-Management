FROM node:13-alpine
ENV PASS_SEC=PURBO\
    JWT_SEC=PURBO\
    STRIPE_KEY=sk_test_51KNFxcIZ5vpA7aEUvuf1AxTnuMJcryqSaBgNqmWhf2zloM3p4yYSYhJhYIQVq3rm2avEUSSKDn6vKLsek6Wgqz3Y00CVv8TvZy

RUN mkdir -p /home/backend

WORKDIR /home/backend

COPY . /home/backend

RUN npm install

EXPOSE 5000

CMD ["npm","start"]