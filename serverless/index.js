'use strict';

// Solution based more or less entirely on this discussion and the follow-ups: https://github.com/fastify/fastify/issues/946#issuecomment-461104668

const functions = require('firebase-functions');
const http = require('http');
const Fastify = require('fastify');

let handleRequest = null;

const serverFactory = (handler, opts) => {
	handleRequest = handler;
	return http.createServer();
};
const fastify = Fastify({ serverFactory });

fastify.get('/', async (req, reply) =>
	reply
		.header('Content-Type', 'text/html')
		.send(
			`<html><head><title>Simple serverless Node.js webserver</title></head><body><p>Simple serverless Node.js webserver</p></body></html>`
		)
);

fastify.get('/hello', async (req, reply) => reply.send({ hello: 'world' }));

exports.webserver = functions.https.onRequest((req, res) => {
	req = Object.assign({ ip: '' }, { ...req });
	fastify.ready(err => {
		if (err) throw err;
		handleRequest(req, res);
	});
});
