import { baseUrl } from './_config';

const level = args[1]
const toekn = args[2]

const url =  baseUrl + `roles/`+ level

const httpRequest = Functions.makeHttpRequest({
  url: url,
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${toekn}`
  },
})

// Execute the API request
const requestResponse = await httpRequest

if (requestResponse.error) {
  console.error(requestResponse.error)
  throw Error("Request failed: " + requestResponse.error)
}

const data = requestResponse["data"]
if (data.Response === "Error") {
  console.error(data.Message)
  throw Error(`Functional error. Read message: ${data.Message}`)
}

// Convert JSON object to a string using JSON.stringify()
// Then encode it to a a bytes using the helper Functions.encodeString
return Functions.encodeString(JSON.stringify(data))
