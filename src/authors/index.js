import express from 'express'
import fs from "fs"
import path, { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const authorsRouter = express.Router()
const currentFilePath = fileURLToPath(
    import.meta.url)
const currentDirPath = dirname(currentFilePath)
const authorsJSONFilePath = join(currentDirPath, "authors.json")
console.log("authors.json path:", authorsJSONFilePath)


authorsRouter.get("/", async(req, res, next) => {
    try {
        const fileContent = fs.readFileSync(authorsJSONFilePath)
        const fileToString = fileContent.toString()
        const authors = JSON.parse(fileToString)
        res.send(authors)
    } catch (error) {
        res.send(500).send({ message: error.message })

    }
})


authorsRouter.get("/:id", async(req, res, next) => {
    try {

    } catch (error) {
        res.send(500).send({ message: error.message })

    }
})

authorsRouter.post("/", async(req, res, next) => {
    try {

    } catch (error) {
        res.send(500).send({ message: error.message })

    }
})

authorsRouter.put("/", async(req, res, next) => {
    try {

    } catch (error) {
        res.send(500).send({ message: error.message })

    }
})

authorsRouter.delete("/", async(req, res, next) => {
    try {

    } catch (error) {
        res.send(500).send({ message: error.message })

    }
})
export default authorsRouter