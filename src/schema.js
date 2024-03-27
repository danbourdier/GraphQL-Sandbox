// Here we define type for our backend's database models,

/* 
 NOTES
 1. GQL works with 5 scalar types when typing primitives: [Boolean, String, ID, Int, Float]
 2. Lists passed to types are defined in the following format: *[<Scalar, CustomType>]*
 3. Non-nullable fields are denoted by: *!*
 4. Defining custom variable types such as *MyFilter* requires use of the *input* syntax which indicates to GQL what to do with said definition.
 5. 
*/

export const typeDefs = `
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    listReviews: [Review!]
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    listReviews(filter: ReviewFilter): [Review!]
  }

  input AuthorFilter {
    id: ID!
    name: String!
    verified: Boolean!
  }

  input AddAuthorInput {
    name: String!
    verified: Boolean!
  }

  input EditAuthorInput {
    name: String!
  }

  # Used for a contrived example on filtering related data
  input ReviewFilter {
    minRating: Int!
  }

  # Both types below serve as our GQL client entry points for what our api consumers can query for.
  # e.g people can query for: query reviews {...}
  # or send for a mutation with mutation review($filter: filter)

  type Query {
    # query entries that don't require a variable
    listReviews: [Review]
    listGames: [Game]
    listAuthors: [Author]

    # query entries that require a variable
    getGame(id: ID!): Game
    getReview(id: ID!): Review
    getAuthor(id: ID!): Author
    getAuthorByFilter(filter: AuthorFilter!, reviewFilter: ReviewFilter): Author
  }

  type Mutation {
    createAuthor(author: AddAuthorInput): [Author]
    deleteAuthor(id: ID!): [Author]
    editAuthorName(id: ID!, options: EditAuthorInput!): [Author]
  }
`;
