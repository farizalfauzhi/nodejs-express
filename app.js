const express   = require('express')
const app       = express()
const port      = 3000

app.get('/', (req,res)=>{
    res.send("<h2>Hello World</h2>")
})

app.get('/profil', (req,res)=>{
    res.send("<h2>Profil saya</h2>")
})

app.get('/profesi', (req,res)=>{
    res.send("<h2>Profesi saya programmer</h2>")
})

app.listen(port, ()=>{
    console.log(`App sudah siap, buka http://localhost:${port}`)
})
