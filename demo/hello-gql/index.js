const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const star = require('./mock/star.js')
const stars = require('./mock/stars.js')

var schema = buildSchema(`
		type Query {
			hello: String,
			star: Star,
			stars(id: Int = -1): [Star]!
		}

		type Star {
			id: ID
			name: String,
			sex: String,
			friends: [Star]!
		}
	`)

function handlerFriend(specStars) {
	console.log('handlerFriend  in')
	specStars.forEach(item => {
		let oldFriendField = item.friends;
		console.log('item: ' + JSON.stringify(item))
		console.log('old: ' + oldFriendField)
		let newFriendField = stars.filter(star => {
			return oldFriendField.includes(star.id)
		})

		item.friends = newFriendField;
	})

	console.log(specStars)

	return specStars
}

// root 提供所有API入口端点相应的解析函数
var root = {
	hello: () => {
		return 'Hello world!';
	},
	star: () => {
		return star
	},
	stars: (req) => {
		const id = req.id;
		console.log('id: ' + id)
		let result = [];
		if (id == -1) {
			result = stars
		} else {
			result = stars.filter(star => {
				return star.id == id;
			})
		}
		return handlerFriend(result)
	}
}

var app = express()

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true
}))

app.listen(5000);
console.log('GraphQL API server at port 5000!')