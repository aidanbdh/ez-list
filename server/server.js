const app = require('./app.js')

const PORT = process.env.port || 3000

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
