const express = require('express')
const app = express()
const hostname = "127.0.0.1";
const port = 3000;
const path_data = './data/data.json'


// лень робить новий документ

const fs = require("fs");

const get_data = () => JSON.parse(fs.readFileSync(path_data))
let data = get_data()

const write_file = (data) => {
    fs.writeFile(
        path_data,
        JSON.stringify(data),
        err => {
            if (err) {
                console.log(`Невдалося записати бісові дані \n ${err}`)
            }
        })
}


// завантажуємо сторінку
app.use(express.static(__dirname))
app.use(express.json())
app.use(express.urlencoded( {extended: false}))

//--------------------------Запроси------------------------------

app.get('/get_data', (req, res) => {
    res.send(JSON.stringify(data))
})

// app.post('/push_data', (req, res) => {
//     data = req.body
//     write_file({"data": data})
//     res.send('все ок')
// })

app.post('/push_data', (req, res) => {
    const data1 = req.body.data
    data = {"data": data1}
    write_file(data)
    res.send('все ок')
})

//-----------------------------------------------------------

// Виводим лог
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})