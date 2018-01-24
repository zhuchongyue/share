
const  {
	graphql,
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLInt,
	GraphQLString,
	GraphQLNonNull,
	GraphQLInputObjectType
} = require('graphql');


let ReviewInput = new GraphQLInputObjectType({
	name: "ReviewInput",
	fields: {
		stars: {
			type: GraphQLInt,
			defaultValue: 1
		},
		comment: {
			type: GraphQLString
		}
	}
})

let schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		description: "RootQueryType desc",
		fields: {
			hello: {
				type: GraphQLString,
				resolve() {
					return 'world'
				}
			},
			count: {
				type: GraphQLInt,
				args: {
					byte: { type: GraphQLNonNull(ReviewInput) }
				},
				resolve(parentValue, args, request) {
					console.log(parentValue)
					console.log(args)
					return 1
				}
			}
		}
	})
});

// const query = '{ hello }';
// graphql(schema, query).then(result => {
// 	console.log(result)
// })
const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express()
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4001, () => { console.log('ok!')});