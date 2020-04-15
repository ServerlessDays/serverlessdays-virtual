const fs = require('fs')
const path = require('path')

const APIKey = process.env['APIKEY']
const url = process.env['URL']

const secretPath = path.join(__dirname,'../functions/register/secrets.json')

const secrets = {
    APIKey,
    url
}

fs.writeFileSync(secretPath,JSON.stringify(secrets))