// Example db
import db from "./_dbExample.js";

// Query resolver keys must match schema keys
const _queryResolver = {
  listGames() {
    return db.games;
  },
    getGame(_, args) {
      return db.games.find((game) => game.id === args.id)
    },
  listAuthors() {
    return db.authors;
  },
    getAuthor(_, args) {
      return db.authors.find((author) => author.id === args.id)
    },
    getAuthorByFilter(_, args) {
      // console.warn(args)
      const { filter: { id } } = args;
      return db.authors.find((author) => author.id === id)
    },
  listReviews() {
    return db.reviews;
  },
    getReview() {
      return db.find((review) => review.id === args.id)
    },
}

const _mutationResolver = {
  createAuthor(_, args) {
    const newAuthor = {
      ...args.author,
      id: Math.floor(Math.random() * 1000).toString()
    }
    db.authors.push(newAuthor);

    return db.authors;
  },
  deleteAuthor(_, args) {
    db.authors = db.authors.filter((author) => author.id !== args.id);
    return db.authors;
  },
  editAuthorName(_, args) {
    db.authors = db.authors.map((author) => {
      if (author.id === args.id) {
        return {...author, ...args.options}
      }

      return author;
    })

    return db.authors;
  },
}

// The following are treated as top level keys(Keys matching defined Types)
//  With each subfield indicating a matching key in the respective type's schema
const _relatedDataQueries = {
  Game: {
    listReviews(parent) {
      return db.reviews.filter((review) => review.gameId === parent.id);
    },
  },
  Author: {
    listReviews(parent, args) {
      // debugger
      if ("filter" in args) {
        const { filter: { minRating } } = args;
        return db.reviews.filter((review) => {
          const isRelated = review.authorId === parent.id;
          const isMinRated = review.rating >= minRating;
          return isRelated && isMinRated;
        });
      }

      return db.reviews.filter((review) => review.authorId === parent.id);
    }
  },
}

export const resolvers = {
  Query: _queryResolver,
  Mutation: _mutationResolver,
  ..._relatedDataQueries,
}