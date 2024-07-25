import express from "express";
import {graphql} from "graphql";
import schema from "./schema.js";
import { graphqlHTTP } from 'express-graphql'


const app= express()
app.get("/",(req,res)=>{
    res.send("Hello world")
})

let rootValue = {
    hello:()=> {
      return "Hello world!"
    }
  }

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true
}))

app.listen(8000,()=>console.log("App is listening at 8000"))