const express = require('express')
const { get } = require('./queries')


const app = express()
const router = express.Router()

const port = process.env.PORT || 3000

router.get("/", (req,res)=>{
  get().then(res.json('Funcionou!'))
  
})

app.use(router)

app.listen(port, ()=> console.log('SERVER ON!'))