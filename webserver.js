const express = require("express") //library
const app = express() //ready creating the server
const port = 3001  // door to listen to localhost:3001 on server

app.listen (port, () => { // callback
    console.log(`started on port ${port}`)
})
