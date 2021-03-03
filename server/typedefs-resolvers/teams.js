const { gql } = require('apollo-server')
const database = require('../database');

const typeDefs = gql`
  type Team {
    id: Int
    manager: String
    office: String
    extension_number: String
    mascot: String
    cleaning_duty: String
    project: String
    supplies: [Supply]
  }
`
const resolvers = {
  Query: {
    teams: () => database.teams
      .map((team) => {
        team.supplies = database.supplies
          .filter((supply) => supply.team === team.id)
        return team
      }),
    team: (parent, args, context, info) => database.teams
      .filter((team) => (team.id === args.id))[0],
  },
  Mutation: {

  }
}

module.exports = {
  typeDefs: typeDefs,
  resolvers: resolvers
}