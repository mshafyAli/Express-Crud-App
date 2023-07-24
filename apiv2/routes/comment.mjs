
import express from 'express'
let router = express.Router()




// GET     /api/v1/comment/:postId/:commentId
router.get('/api/v1/comment/:userId/:commentId', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('comment' + new Date());
  })
  // GET     /api/v1/comments/:postId
  router.get('/api/v1/comments/:userId', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('comment' + new Date());
  })
  // POST    /api/v1/comment
  router.post('/api/v1/comment', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('comment' + new Date());
  })
  // PUT     /api/v1/comment/:postId/:commentId
  router.put('api/v1/comment/:postId/:commentId', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('comment' + new Date());
  })
  // DELETE  /api/v1/comment/:postId/:postId
  router.delete('/api/v1/comment/:postId/:postId', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('comment' + new Date());
  })
   
export default router