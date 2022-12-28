"use strict";

module.exports = async function (app, opts) {
    app.post("/", {
        schema: {
            body: {
                type: "object",
                properties: {
                    admin: { type: "string" },
                    author: { type: "string" },
                    ccli_number: { type: "integer" },
                    copyright: { type: "string" },
                    created_at: { type: "string" },
                    hidden: { type: "boolean" },
                    last_scheduled_at: { type: "string" },
                    notes: { type: "string" },
                    title: { type: "string" },
                    updated_at: { type: "string" },
                },
            },
        },
        handler: async (request, reply) => {
            return false;
            const songsCollection = app.mongo.db.collection("songs");
            const result = await songsCollection.insertOne(request.body);
            reply.code(201);
            return { id: result.insertedId };
        },
    });
};
