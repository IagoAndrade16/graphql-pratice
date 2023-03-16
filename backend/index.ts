import { ApolloServer } from "apollo-server"
import { buildSchema } from "type-graphql"
import "reflect-metadata"
import path from "path"
import { UserResolver } from "./src/resolvers/UserResolver"

async function main() {
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
    ], //Resolvers sao como as rotas
    emitSchemaFile: path.resolve(__dirname, 'schema.gpl')
  })

  const server = new ApolloServer({
    schema
  })

  const { url } = await server.listen()

  console.log(`Server running on: ${url}`)
}

main()