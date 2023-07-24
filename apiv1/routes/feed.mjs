
import express from 'express'
let router = express.Router()



// GET     /api/feed/:userId
router.get('/api/feed/:userId', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('comment' + new Date());
  })
  

export default router