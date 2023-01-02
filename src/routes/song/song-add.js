"use strict";

module.exports = async function (app, opts) {
    app.post("/", {
        schema: {
            body: {
                type: "object",
                properties: {
                    admin: { type: "string" },
                    archived: { type: "boolean" },
                    author: { type: "string" },
                    ccliNumber: { type: "integer" },
                    copyright: { type: "string" },
                    hidden: { type: "boolean" },
                    notes: { type: "string" },
                    title: { type: "string" },
                },
            },
        },
        handler: async (request, reply) => {
            const songsCollection = app.mongo.db.collection("songs");
            const result = await songsCollection.insertOne({
                ...request.body,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
            reply.code(201);
            return { id: result.insertedId };
        },
    });
};
