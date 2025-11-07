const express = require("express")

const server = express()
const port = 3030

server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.set("view engine", "ejs")

server.get("/", function (request, response) {
    response.render("index", {})
})

server.listen(port, function () {
    console.log("Server started on port", port)
})