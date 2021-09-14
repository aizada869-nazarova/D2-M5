import express from 'express'
import cors from 'cors'
import listEndpoints from 'express-list-endpoints'
import authorsRouter from "./authors/index.js"

const server = express()
const port = 3001
server.use(cors())
server.use(express.json())
console.log(listEndpoints(server))

server.use("/authors", authorsRouter)



server.listen(port, () => console.log("server is running on port:", port))