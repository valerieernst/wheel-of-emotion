const { gql } = require('apollo-server');

const typeDefs = gql`
    type Survey {
        id: ID!
        question: String!
    }

    type Query {
        survey: Survey!
    }
`;

module.exports = typeDefs;
