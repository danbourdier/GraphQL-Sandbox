// GRAPHQL query/mutation templates and notes
// The below contain query string examples specific to our schema and resolver setup

// QUERY examples
`
# Simulates querying with/without scalar types

# Fragments afford us a way to modularize our defined queries
fragment MyFragment1 on Author {
  id
  name
  verified
}

fragment MyFragment2 on Author {
  id
  name
  # listReviews {
  #   id
  # }
}

query MyQuery($idArg: ID!, $getGameId: ID!) {
  # without variables
  listAuthors {
    #...MyFragment1
    ...MyFragment2
  }

  # with vars(scalar types)
  # getAuthor(id: $idArg) {
  #   id
  #   name
  # }

  # related data queries(associations)
  # getGame(id: $getGameId) {
  #   id
  #   listReviews {
  #     id
  #   }
  # }
}

# Simulates querying with custom input types
query MyFilterQuery($filter: AuthorFilter!) {
  getAuthorByFilter(filter: $filter) {
    id
    name
  }
}

# Simulates nested querying with nested filtering applied
query MyNestedQuery($filter: AuthorFilter!, $reviewFilter: ReviewFilter) {
  # nested queries
  getAuthorByFilter(filter: $filter, reviewFilter: $reviewFilter) {
    id
    # can call without optional filter as long as the resolver handles edge-case
    listReviews(filter: $reviewFilter) {
      id
    }
  }
}
`

// MUTATION examples
`
# Simulates a basic mutation example
mutation MyCreateMutation($author: AddAuthorInput!) {
  createAuthor(author: $author) {
    id
  }
}

# Simulates a deletion
mutation MyDeleteMutation($id: ID!) {
  deleteAuthor(id: $id) {
    id
  }
}

# Simulates an update
mutation MyUpdateMutation($id: ID!, $options: EditAuthorInput!) {
  editAuthorName(id: $id, options: $options) {
    id
    name
  }
}
`
