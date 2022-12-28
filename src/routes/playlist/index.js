"use strict";

module.exports = async function (app, opts) {
    app.get("/", async function (request, reply) {
        return [];
    });
};

module.exports = async function (app, opts) {
    app.get("/:playlistId", async function (request, reply) {
        return {};
    });
};
