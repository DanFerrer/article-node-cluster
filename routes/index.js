// const router = require('express').Router();
// const RedisServer = require('redis-server');
// const articles = require('../articles/articles.json');
// const multer  = require('multer');
// const path = require('path');
// const fs = require('fs');

// var client, limiter, storage, upload;

// const server = new RedisServer(6379);

// function fibonacci (num) {
//   return num <= 1 ? num : fibonacci(num-1) + fibonacci(num-2);
// };

// server.open().then(() => {
//   client = require('redis').createClient();
//   limiter = require('express-limiter')(router, client);
//   storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, '../articles/');
//     },
//     filename: function(req, file, cb) {
//       cb(null, `${file.fieldname}-${Date.now()}`)
//     }
//   });
//   upload = multer({storage: storage}).single('newArticle');
// });

// router.use((req, res, next)  => {
//   console.log(`Running fibonacci for ${req.originalUrl}`);
//   console.log(fibonacci(34));
//   next();
// });

// router.get('/', (req, res) => {
//   res.status(200).json({ message: 'connected to index route'});
// });

// router.get('/articles/:articleName', limiter({total: 20100, expire: 1000, lookup: 'connection.remoteAddress'}), (req, res) => {
//   let article = articles.find(ele => ele.slug === req.params.articleName);

//   if (article) {
//     let htmlPath = path.join(__dirname, '..', `/articles/${article.slug}/${article.file}`);

//     res.sendFile(htmlPath);
//   }
// });

// router.get('/articles/:articleName/download', (req, res, next) => {
//   let article = articles.find(ele => ele.slug === req.params.articleName);

//   if (article) {
//     let htmlPath = path.join(__dirname, '..', `/articles/${article.file}`);

//     res.download(htmlPath, article.file);
//   }
// });

// router.post('/articles/:articleName/upload', limiter({total: 10, expire: 1000, lookup: 'connection.remoteAddress'}), upload.single('newArticle'), (req, res) => {
//   let article = articles.find(ele => ele.slug === req.params.articleName);

//   if (article) {
//     upload(req, res, function (err) {
//       if (err) return;

//       res.send('File Uploaded!');
//     });
//   }
// });





// module.exports = router;
