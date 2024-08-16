import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express()

//.ENV
dotenv.config()
const PORT = process.env.PORT ?? 4000




//RUTAS

//Configurando directorios
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//Index url
app.get ('/', (req, res)=>{
    console.log('index')
    res.sendFile(path.join(__dirname, '../public/index'))
})

//Contacto url
app.get('/contacto', (req,res)=>{
    console.log('contacto')
    res.sendFile(path.join(__dirname, '../public/contacto'))

})

//404 - Manejo de error al solicitar url
app.use((req,res)=>{
    console.log('contacto')
    res.sendFile(path.join(__dirname, '../public/404.html'))
})



//Server PORT
app.listen(PORT, ()=>{
    console.log(`Servidor levantado en el puerto http://localhost:${PORT}`)
})



