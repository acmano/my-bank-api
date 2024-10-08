import { GraphQLSchema, GraphQLObjectType } from "graphql";
import AccountQuery from "./queries/account.queries.js";
import AccountMutation from "./mutations/account.mutation.js";

const Schema = new GraphQLSchema({
  types: null,
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      ...AccountQuery
    }
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutation",
    fields: {
      ...AccountMutation
    }
  })
});

export default Schema