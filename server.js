let express = require('express')
let app = express()
let fs = require('fs')
let https = require('https')
let privateKey  = fs.readFileSync('private.pem', 'utf8')
let certificate = fs.readFileSync('file.crt', 'utf8')
let credentials = {key: privateKey, cert: certificate}

let httpsServer = https.createServer(credentials, app)

httpsServer.listen(443, () => {
    console.log('HTTPS Server is running on: https://localhost:%s', 443)
})

app.get('/intel', (req, res) => {
  res.sendFile( __dirname + "/" + "index.htm" )
})
