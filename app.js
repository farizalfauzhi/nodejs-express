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

app.get('/pengalaman', (req,res)=>{
    res.render('daftar-pengalaman', {
        nama: 'Fariz Alfauzhi',
        jenis_kelamin: 'L',
        posisi: 'Sr. Programmer',
        perusahaan: 'Courser-net',
        gaji: 9000000,
        pajak: (this.gaji > 10000000) ? 'gaji Anda kena pajak': 'aman, gak perlu bayar pajak',
    })
})

app.listen(port, ()=>{
    console.log(`App sudah siap, buka http://localhost:${port}`)
})
