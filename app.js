const express   = require('express')
const app       = express()
const port      = 3000

app.set('view engine', 'ejs')
app.set('views', './view-ejs')

app.get('/', (req,res)=>{
    res.render("index")
})

app.get('/profil', (req,res)=>{
    res.render("profil")
})

app.get('/profesi', (req,res)=>{
    res.send("<h2>Profesi saya programmer</h2>")
})

app.listen(port, ()=>{
    console.log(`App sudah siap, buka http://localhost:${port}`)
})
