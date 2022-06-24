const { response } = require("express")
const express = require("express")
const path = require("path")
const app= express()
const port =3000


app.use(express.static(path.resolve(__dirname,"public")))

app.get("/", (req,res) => res.sendFile(path.join(__dirname, "views", "index.html")))    //para enrutar los archivos html con app
app.get("/about", (req,res) => res.sendFile(path.join(__dirname, "views", "about.html")))

app.get("/contacto", (req,res) => res.sendFile(path.join(__dirname, "views", "contact.html")))

app.get("/music", (req,res) => res.sendFile(path.join(__dirname, "views", "music.html")))

app.get("*", (req,res) => res.sendFile(path.join(__dirname, "views", "404.html")))





app.listen(port,() =>console.log(`el servidor fue levantado con exito el dia miercoles a las 9am en el puerto: ${port}`))

