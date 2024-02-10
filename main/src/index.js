const express = require("express")
const path = require("path")

const app = express()
// app.use("view engine", "ejs")

app.use(express.static(path.join("__dirname", "../public" )))


app.get("/", (req, res)=>{
    res.send("Server is working")
})

app.listen(9000, ()=>{
    console.log("server is running on 9000")
})
