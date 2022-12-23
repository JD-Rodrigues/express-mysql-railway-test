const express = require('express')
const { get } = require('./queries')


const app = express()
const router = express.Router()

const port = process.env.PORT || 3000

router.get("/", (req,res) => {
  get().then(data => res.json(data))
  
})

app.use(router)

app.listen(port, ()=> console.log('SERVER ON!'))