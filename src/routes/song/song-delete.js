"use strict";

module.exports = async function (app, opts) {
    app.delete("/:songId", {
        handler: async (request, reply) => {
            const songsCollection = app.mongo.db.collection("songs");
            const result = await songsCollection.deleteOne({ _id: app.mongo.ObjectId(request.params.songId) });
            reply.code(201);
            return result;
        },
    });
};
