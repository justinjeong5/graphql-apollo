const { gql } = require('apollo-server')

const typeDefs = gql`
  type Mutation {
    deleteEquipment(id: String): Equipment
    insertEquipment(
      id: String,
      used_by: String,
      count: Int,
      new_or_used: String
    ): Equipment
    editEquipment(
      id: String,
      used_by: String,
      count: Int,
      new_or_used: String
    ): Equipment
  }
`

module.exports = typeDefs