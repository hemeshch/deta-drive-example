const express = require('express')
const { Deta } = require('deta')

let app = express()

const deta = Deta('yourProjectKey');
const drive = deta.Drive('example_drive');

app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(express.json())

app.get('/', function (req, res) {
    drive.put('upload.jpg', { data: "Test upload" }).then((response) => {
        res.send(response)
    })
})


app.listen(3000)