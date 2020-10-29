const   express = require("express"),
        { graphqlHTTP } = require("express-graphql"),
        schema = require("../schema/schema"),
        app = express(),
        PORT = 3005;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(PORT, err => {
    err ? console.log(err) : console.log("Сервер работает!");
})