schema GraphQLSchema
graphiql? boolean
rootValue? any
context ?any
pretty boolean
formatError Function
validatationRules Array<any>


GraphQLScalarType
GraphQLObjectType
GraphQLInterfaceType
GraphQLUnionType
GraphQLEnumType
GraphQLInputObjectType
GraphQLList
GraphQLNonNull

function isInputType
function isOutputType
function isLeafType
function isCompositeType
function isAbstractType

function getNullableType
function getNamedType


var GraphQLInt
var GrahpQLFloat
var GraphQLString
var GraphQLBoolean
var GraphQLID










class GraphQLInterfaceType {
    
}

new GraphQLInterfaceType({
    name: '',
    fields: {
        
    },
    resolveType: {

    },
    description: "interface desc"
})

class GraphQLUnionType {
    constructor(config: GraphQLUnionTypeConfig)
}

type GraphQLUnionTypeConfig = {
    name: String,
    types: GraphQLObjectsThunk | Array<GraphQLObjectType>,
    resolveType?: (value: any, info?: GraphQLResolveInfo) => GraphQLObject;
    description?: ?string;
}

type GraphQLObjectsThunk = () => Array<GraphQLObjectType>;

var PetType = new GraphQLUnionType({
    name: 'Pet',
    types: [DogType, CatType],
    resolveType(value) {
        if (value instanceof Dog) {
            return DogType;
        }
        if (value instanceof Cat) {
            return CatType;
        }
    }
});



























