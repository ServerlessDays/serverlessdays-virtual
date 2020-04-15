const registerFunction = require('../../../dist/server/registerFunction.js')

const testFunction = async () => {
    const event = {
        httpMethod: 'POST',
        body: JSON.stringify({ email: 'ant+test2@serverlessdays.io', name: 'Ant 2nd Test Email' })
    }

    const response = await registerFunction.handler(event)
    console.log(response)
}

testFunction()