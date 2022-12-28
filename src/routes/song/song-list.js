"use strict";

module.exports = async function (app, opts) {
    app.get("/", {
        handler: async (request, reply) => {
            const songsCollection = app.mongo.db.collection("songs");
            const result = await songsCollection.find().toArray();
            reply.code(201);
            return result;
        },
    });
};
