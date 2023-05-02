const { log } = require('console')
const express = require('express')
const {join} = require('path')
const app = express()
const port = 3000
const index = join(__dirname, "index.html")
app.use(express.json())
app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.sendFile(index)
})

app.post('/index.html', (req, res) =>{
    const data = req.body
    const num1 = Number(data.num1);
    const num2 = Number(data.num2)
    const result = num1+ num2
    res.send(`Result is ${result}`)
})




app.listen(port, ()=> {
    console.log(`server started at port ${port}`);
})