module.exports = {
    Query: {
        survey: (initValue, args, { db }) => db.Survey.findOne(),
    },
};
