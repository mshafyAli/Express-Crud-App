

import express from 'express'
let router = express.Router()



// GET     /api/v1/post/:userId/:postId

router.get('/api/v1/post/:userId/:postId', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('post created' + new Date());
  })
  
  // GET     /api/v1/posts/:userId 
  router.put('/api/v1/posts/:userId ', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('post created' + new Date());
  })
  
  
  // POST    /api/v1/post
  router.post('/api/v1/post', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('post created' + new Date());
  })
  
  // PUT     /api/v1/post/:userId/:postId
  router.put('/api/v1/post/:userId/:postId', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('post created' + new Date());
  })
  // DELETE  /api/v1/post/:userId/:postId
  router.delete('/api/v1/post/:userId/:postId', (req, res) => {
    console.log('this is profile!', new Date());
    res.send('post created' + new Date());
  })
  

  export default router