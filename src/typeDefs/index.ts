const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  type Query {
    articlesForHome: [Article!]!
    article(id:ID!): Article
  }
  # This "Book" type defines the queryable fields for every book in our data source.
  type Article {
    id: ID!
    title: String!
    image:String
    viewCount: Int
    author: Author
    createdAt:String
    updatedAt:String
  }
  type User {
    id: ID!
    name:String!
    firstName:String!
    lastName:String!
    email:String!
    role:Role
  }
  enum Role{
    Admin,
    Editor,
    Subscriber
  }
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
 
`;
export default typeDefs;
