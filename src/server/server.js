const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const db =  require('./db/models/index');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context() {
        return { db };
    }
});

server.listen()
    .then(({ url }) => {
        console.log(`Server listening at ${url}`);
    });
