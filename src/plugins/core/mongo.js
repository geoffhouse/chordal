"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
    fastify.register(require("@fastify/mongodb"), {
        forceClose: true,
        url: "mongodb://chordal-db:27017/chordal",
    });
});
