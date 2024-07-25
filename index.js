import express from "express";
import {graphql} from "graphql";
import schema from "./schema.js";
import { createHandler } from"graphql-http/lib/use/express";
import dotenv from "dotenv";
import {ruruHTML} from "ruru/server";
dotenv.config({
    path: './.env'
})

const port = process.env.PORT
const app= express()
app.get("/",(req,res)=>{
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
})

let rootValue = {
    hello:()=> {
      return "Hello world!"
    }
  }

app.all('/graphql', createHandler({
    schema: schema,
    rootValue: rootValue,
   
}))

app.listen(port,()=>console.log(`App is listening at ${port}`))