const express = require('express');

const userDb = require('./userDb');
const postDb = require('../posts/postRouter');

const router = express.Router();

router.post('/', validateUser(), (req, res) => {
  // do your magic!
  userDb.insert(req.body)
  .then(newUser => {
    res.status(200).json(newUser);
  })
  .catch(error => {
    res.status(500).json({error: 'cannot add user'});
  })
});

router.post('/:id/posts', validateUSerId, validate(), (req, res) => {
  // do your magic!
  postDb.insert({...req.body, user_id: req.params.id})
  .then(newPost => {
    res.status(200).json(newPost);
  })
  .catch(error => {
    res.status(500).json({error: 'cannot add post'});
  })
});

router.get('/', (req, res) => {
  // do your magic!
  userDb.get()
  .then(users => {
    res.status(200).json(users);
  })
  .catch(error => {
    res.status(500).json({error: 'cannot get users'});
  })
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  userDb.getById(req.params.id)
  .then(user => {
    res.status(200).json(user);
  })
  .catch(error => {
    res.status(500).json({error: 'cannot get user'});
  })
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
  userDb.getUserPosts(req.params.id)
  .then(userPosts => {
    res.status(200),json(userPosts);
  })
  .catch(error => {
    res.status(500).json({error: 'cannot get user posts'})
  })
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
