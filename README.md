# Simple Node.js webserver running Fastify

This package sets up a Fastify server responding to two paths:

- `/` (root), serving a rudimentary HTML page
- `/hello` serving a JSON object with the key `hello` and the value `world`

I made this as a basic "go-to" application for the course "Cloud Developer Basics" that I am running.

## Container or serverless function?

### The regular version

This is the one stored in `/src`. There is a Dockerfile present, to help you containerize it for use in a service like Google's Compute Engine, Kubernetes Engine or Cloud Run, or maybe AWS's Fargate. Whatever makes you happy!

### Google Cloud Functions (serverless) version

As a small extra, under `/serverless` I've added a version which is a somewhat edited version that's possible to deploy on Google Cloud Functions.

Interested in Fastify for serverless? Then you should read [https://github.com/fastify/fastify/issues/946#issuecomment-461104668](https://github.com/fastify/fastify/issues/946#issuecomment-461104668) and [https://github.com/fastify/fastify/blob/master/docs/Serverless.md](https://github.com/fastify/fastify/blob/master/docs/Serverless.md).

## Prerequisites

- You have Docker working on your system if you are going with my AWS approach, [else read this guide](https://docs.docker.com/install/) or just use [Docker Desktop](https://www.docker.com/products/docker-desktop)
- You have an GCP/AWS account or an IAM/SSO user in a GCP/AWS account with any needed access rights
- Your cloud environment is correctly setup and your profile is usable
- You have edited the placeholders in the respective build file (or manually typed in) to correspond with your actual real settings

## Build and push the image to a container registry

Note that of course all of this should work just fine with Dockerhub or something similar as well, but I'm sticking to the GCP and AWS specific services here.

### Amazon Web Services: Elastic Container Registry

Run `build-aws.sh`. This approach uses local Docker to push to ECR via the local AWS credentials.

### Google Cloud Platform: Cloud Build

Run `build-gcp.sh`. This approach uses the `gcloud` CLI tool to let Cloud Build build the image and store it in Container Registry.
