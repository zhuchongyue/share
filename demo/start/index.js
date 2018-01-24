var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
	type Query {
		hello: String,
		ship: Starship
	}

	enum LenghUnit {
		MM
		mm
	}

	type Character {
		name: String!
		appearsIn: [Int]!
	}
	type Starship {
		id: ID!
		name: String!
		length(unit: LenghUnit!): Float
	}
`);

var ships = {
	id: 1,
	name: 'appole',
	length: '120'
}

var root = { 
	hello: () => 'Hello World!',
	ship: (req) => {
		console.log("req:")
		console.log(req)
		return ships
	}
};

var app = express();
app.use('/graphql', graphqlHTTP({
	schema,
	rootValue: root,
	graphiql: true
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))