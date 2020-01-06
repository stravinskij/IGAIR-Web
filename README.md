![GitHub Actions Deploy Status](/workflows/deploy/badge.svg)


# Intergalactic Airlines Website

This repository contains the source code for the  website of the
[Star Citizen](https://robertsspaceindustries.com/star-citizen) player organization
[Intergalactic Airlines](https://robertsspaceindustries.com/orgs/IGAIR). The pages are served by [node.js](https://nodejs.org/en/) code using the [Express](https://expressjs.com/) framework, templates are rendered by
[handlebars](https://handlebarsjs.com/). The site is hosted in serverless fashion on
[Firebase Functions](https://firebase.google.com/docs/functions/), storage and authentication are handled by various
other [Firebase services](https://firebase.google.com/products).

<img src="https://raw.githubusercontent.com/Jonathan-Fort/IGAIR-Web/master/public/images/igair-logo-transparent.png" width="360px">

## Running Locally

1. Install [node.js](https://nodejs.org/en/download/).
2. Install the [Firebase CLI](https://firebase.google.com/docs/cli#setup_update_cli): `npm install -g firebase-tools`
3. In the `functions` directory, run `npm install`.
4. Login to Firebase: `firebase login`
5. Make sure you have access to the "igair-organizationhub" Google Cloud project, or run `firebase` commands using `--project <your-project-id>` with the name of your own personal GCP/Firebase project for testing.
6. From the same directory (or root), run `firebase serve` to run the project locally.
7. Browse to [localhost:5000](http://localhost:5000/#).
