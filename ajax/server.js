const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) // Ele provê todos os arquivos da mesma pasta
app.use(bodyParser.urlencoded({extended: true})) // formato de submit de formulário
app.use(bodyParser.json()) // formato para json

// aula 2

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '.')
    },
    filename: function  (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um ERRO')
        }

        res.end('Concluído com sucesso')
    })
})

// fetch 2

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

// axios 2
app.get('/parOuImpar', (req, res) => {
    // req.body
    // req.query
    // req.params
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'ímpar'
    })
})

app.listen(8080, () => console.log('Executando.....'))