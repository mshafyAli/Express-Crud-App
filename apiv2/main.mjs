import express from 'express'
let router = express.Router();

import authRouter from './routes/auth.mjs'
import commentRouter from './routes/comment.mjs'
import postRouter from './routes/post.mjs'
import feedRouter from './routes/feed.mjs'



router.use(authRouter);
router.use(commentRouter)
router.use(postRouter)
router.use(feedRouter)




export default router