const express = require('express')
const app = express()
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended : true}))

app.get('/login', function(req, res) {
    const user = req.query.username, pass = req.query.password
    if ((user == "ido") & (pass == "kapach")) {
        res.end(`welcome back, Ido!`)
    }
    else {
        res.end(`Username or password are inccorect.`)
    }
})


 app.post('/login', function(req,res){
    if ((req.body.username == "ido") & (req.body.password == "kapach")) {
        res.end(`welcome back, Ido!`)
    }
    else {
        res.end(`Username or password are inccorect.`)
    }
})

 app.listen(8777)