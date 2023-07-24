
import express from 'express'
let router = express.Router()

router.get('/api/v2/login', (req, res) => {
    console.log('this is login', new Date());
    res.send('this is login' + new Date());
  })
  
  
  router.post('/api/v2/signUp', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('this is profile' + new Date());
  })

  export default router

