const router = require('express').Router();
const RedisServer = require('redis-server');
const articles = require('../articles/articles.json');
const path = require('path');

const server = new RedisServer(6379);

server.open().then(() => {
  const client = require('redis').createClient();
  const limiter = require('express-limiter')(router, client);
});

router.get('/', (req, res) => {
  res.status(200).json({ message: 'connected to index route'});
});

router.get('/articles/:articleName', (req, res) => {
  console.log(req.params);
  let article = articles.find(ele => ele.slug === req.params.articleName);

  if (article) {
    res.sendFile(path.join(__dirname, '..', `/articles/${article.slug}/${article.file}`));
  }
});



module.exports = router;
