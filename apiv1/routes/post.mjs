


import express from 'express';
import { nanoid } from 'nanoid'
let router = express.Router()

// not recommended at all - server should be stateless
let posts = [
    {
        id: nanoid(),
        title: "abc post title",
        text: "some post text"
    }
]

// POST    /api/v1/post
router.post('/post', (req, res, next) => {
    console.log('this is signup!', new Date());

    if (
        !req.body.title
        || !req.body.text
    ) {
        res.status(403);
        res.send(`required parameters missing, 
        example request body:
        {
            title: "abc post title",
            text: "some post text"
        } `);
        return;
    }

    posts.push({
        id: nanoid(),
        title: req.body.title,
        text: req.body.text,
    })

    res.send('post created');
})
// GET     /api/v1/posts
router.get('/posts', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send(posts);
})

// GET     /api/v1/post/:postId
router.get('/post/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());

    if (isNaN(req.params.postId)) {
        res.status(403).send(`post id must be a valid number, no alphabet is allowed in post id`)
    }

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === Number(req.params.postId)) {
            res.send(posts[i]);
            return;
        }
    }
    res.send('post not found with id ' + req.params.postId);
})

// PUT     /api/v1/post/:userId/:postId
router.put('/post/:postId', (req, res, next) => {
  console.log('Request received for PUT /api/v1/post/:postId', new Date());

  const postIdToUpdate = req.params.postId;
  const { title, text } = req.body;

  // Find the post with the matching ID in the posts array
  const postToUpdate = posts.find(post => post.id === postIdToUpdate);

  // Check if the post was found
  if (!postToUpdate) {
    res.status(404).send('Post not found with ID ' + postIdToUpdate);
    return;
  }

  // Update the post's title and text
  if (title) {
    postToUpdate.title = title;
  }

  if (text) {
    postToUpdate.text = text;
  }

  res.send('Post updated successfully');
});
// DELETE  /api/v1/post/:userId/:postId
router.delete('/post/:postId', (req, res, next) => {
  console.log('Request received for DELETE /api/v1/post/:postId', new Date());

  const postIdToDelete = req.params.postId;

  // Find the index of the post with the matching ID in the posts array
  const postIndex = posts.findIndex(post => post.id === postIdToDelete);

  // Check if the post was found
  if (postIndex === -1) {
    res.status(404).send('Post not found with ID ' + postIdToDelete);
    return;
  }

  // Remove the post from the posts array
  posts.splice(postIndex, 1);

  res.send('Post deleted successfully');
});

export default router