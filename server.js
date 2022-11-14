const express = require("express");
const express_graphql = require("express-graphql");

const { buildSchema } = require("graphql");

const schema = buildSchema(`type Query {
    hello : String
}`);

const root = {
  hello: () => {
    return "Hello World!";
  },
};

var app = express();
app.use(
  "/graphql",
  express_graphql.graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Running a graphQL API");
});
