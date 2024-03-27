# Summary
Spins up a local instance with a pseudo-backend for testing graphQL requests from a frontend client(Apollo Client in this case). Refer to [helpful links](#helpful-links) below for the link. Once there, connect to your local instance to begin making requests (snippet below for context). 

For query/mutation templates to start with, see: `./src/requestTemplates.js`.

![Apollo web client](/SiteSnippet.png)


# Setup
1. Run `npm i`
2. Run `npm run start`
3. Go to #helpful links #1 and connect to port 8000 in the top left corner.  



# Syntax
1. Query -
2. Mutation -
3. Schema -
4. Resolver -
1. Operation Name -
2. Operation Body -
3. Query/Mutation name -
4. Variables -
5. Scalar Types -
6. Input Types -
7. Related Data -
8. Nested Queries - 
11. Fragments -
12. GraphQL clients(frontend/backend)
13. GraphQL sandboxes - This one!

# Motivations for using GraphQL
Overfetching and underfetching in applications oftens means n calls to enable a feature in an application. Leading to cumbersome latency/memory issues. As well as tight coupling between traditional REST endpoints and changing client/feature requirements.

# Pros
1. providing an extra layer of validation for creating/updating entries in our backend prior to making changes to our DB.
2. Early failure detection for invalid calls in top layers of request cycle vs in a controller layer.
2. replaces age old "API churn and burn" by allowing devs to essentially *key* what they want.
4. self documenting schema and gql server requirements

# Cons
1. requires defining/re-defining types for changes to backend table models
2. requires further interoperability between teammates so type/input definition changes and required response data structures are easily handled.
3. one of several motivations for graphql being created was to avoid *api churn and burn*. However, this arguably requires same amount of effort to address for nested query for filtering table entity associations. E.g: querying an author while filtering their books according to time ranges provided.
4. 

### Helpful Links <a id="helpful-links"></a>
1. GraphQL client Sandbox: https://studio.apollographql.com/sandbox/explorer
2. GraphQL Docs: https://graphql.org/learn/queries/
3. 