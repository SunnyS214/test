const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
app.set('view engine', "ejs")



app.get("/", (req, res) => {
    // res.render('testlogin')
    res.render('home')
})

app.get("/login", (req, res) => {
    res.render('testlogin')
})



app.listen(port)