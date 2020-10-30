const   grapgql = require("graphql"),
        { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = grapgql;

const moviesData = [
    { id: "1", name: "Игра на выживание", genre: "триллер" },
    { id: "2", name: "Расправь крылья", genre: "приключения" },
    { id: 3, name: "Домовой", genre: "комедия" },
    { id: 4, name: "Солдатик", genre: "военный" },
]

const directors = [
    { id: 1, direction: "Эйтор Далия", year: 2012 },
    { id: 2, direction: "Николя Ванье", year: 2019 },
    { id: 3, direction: "Евгений Бедарев", year: 2019 },
    { id: 4, direction: "Виктория Фанасютина", year: 2018 },
]

const MovieType = new GraphQLObjectType({
    name: "Movie",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
    }),
});

const DirectionType = new GraphQLObjectType({
    name: "Direction",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        year: { type: GraphQLInt },
    }),
});

const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return moviesData.find(movie => movie.id === args.id)
            }
        },
        director: {
            type: DirectionType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return directors.find(dir => dir.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: Query,
})