const fs = require('fs')
const path = require('path')

const APIKey = process.env['CM_APIKEY']
const url = process.env['CM_URL']

const secretPath = path.join(__dirname,'../functions/register/secrets.json')

const secrets = {
    APIKey,
    url
}

fs.writeFileSync(secretPath,JSON.stringify(secrets))