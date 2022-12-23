const express = require('express')

const app = express()
const router = express.Router()

const port = process.env.PORT || 3000

router.get("/", (req,res)=>{
  res.json('Funcionou!')
})

app.use(router)

app.listen(port, ()=> console.log('SERVER ON!'))