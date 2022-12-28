"use strict";

const path = require("path");
const autoLoad = require("@fastify/autoload");

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {};

module.exports = async function (app, opts) {
    app.register(autoLoad, {
        dir: path.join(__dirname, "plugins"),
    });

    app.register(autoLoad, {
        dir: path.join(__dirname, "routes"),
        options: { prefix: "/api/v1" },
    });
};
