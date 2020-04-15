import fetch from 'node-fetch'

const addSubscriber = async ({name,email}) => {
    let result = false
    const APIKey = process.env('APIKey')
    const url = process.env('url')

    if (APIKey) {
        if (url){

            const responseBody = {
                EmailAddress: email,
                Name: name,
                Resubscribe: true,
                RestartSubscriptionBasedAutoresponders: true,
                ConsentToTrack: 'No'
            }

             const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                headers: {
                    'Content-Type': 'application/json',
                    'Authentication': `Basic ${Buffer.from(APIKey).toString('base64')}`
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(responseBody) // body data type must match "Content-Type" header
            });
            if (response.ok) {
                result = true
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