import fetch from 'node-fetch'
import secrets from './secrets.json'

const addSubscriber = async ({name,email}) => {
    let result = false
    const { APIKey, url } = secrets

    if (APIKey) {
        if (url){

            const responseBody = {
                EmailAddress: email,
                Name: name,
                Resubscribe: true,
                RestartSubscriptionBasedAutoresponders: true,
                ConsentToTrack: 'No'
            }

            const request = {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${Buffer.from(`${APIKey}:x`).toString('base64')}`
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(responseBody) // body data type must match "Content-Type" header
            }
            
            const response = await fetch(url, request );
            
            if (response.ok) {
                result = true
            } else {
              console.log(response)
            }
        } else {
            console.log('No URL specified')
            result = false
        }
    } else {
        console.log('No API Key specified')
        result = false
    }
    return result
}

const handler = async (event)=> {

  let response = {};

  try {
    const { body, httpMethod } = event
    
    if (httpMethod == 'POST') {
        const payload = JSON.parse(body)
      
        if (payload.email) {
            if (await addSubscriber(payload)) {
                response = {
                    statusCode: 200,
                    headers: {},
                    body: JSON.stringify({ success: true }),
                };
            
            } else {
                response = {
                    statusCode: 404,
                    body: JSON.stringify({
                        error: "Unable to register",
                    }),
                };
            }
        }
    } else {
      response = {
        statusCode: 405,
        body: JSON.stringify({
          error: "Method not implemented",
        }),
      };
    }
  } catch (error) {
    response = {
      statusCode: 400,
      body: JSON.stringify({
        error,
      }),
    };
    console.error(error)
  }
  return response;

    
}

export { handler }