const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('public/html/index.html' ,{root: __dirname})
})

app.use(express.static("public"))

app.get('/index.html' , (req , res) =>{
    res.sendFile('public/html/index.html' ,{root: __dirname})
})
app.get('/about.html' , (req , res) =>{
  res.sendFile('public/html/about.html' ,{root: __dirname})
})
app.get('/Certification.html' , (req , res) =>{
  res.sendFile('public/html/Certification.html' ,{root: __dirname})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})