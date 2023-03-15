import { baseUrl } from './_config';

const type = args[1]
const id = args[2]
const password = args[3]

const url =  baseUrl + `api/` + id + '/' + password

const httpRequest = Functions.makeHttpRequest({
  url: url,
  method: 'GET',
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
