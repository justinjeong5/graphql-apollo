const { gql } = require('apollo-server')
const database = require('../database');

const typeDefs = gql`
  type Supply {
    id: String
    team: Int
  }
`
const resolvers = {
  Query: {
    supplies: () => database.supplies,
  },
  Mutation: {

  }
}

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers
}