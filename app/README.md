# AWS DevOps App

A simple Node.js Express app that returns a JSON response.

## Run Locally

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Run With Docker

```bash
docker build -t aws-devops-app .
docker run -p 3000:3000 aws-devops-app
```

Open `http://localhost:3000`.
