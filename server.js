// const cluster = require('cluster');
// const os = require('os');

// if (cluster.isMaster) {
//   const numCPUS = process.env.numCPUS || os.cpus().length;

//   for (let i = 0; i < numCPUS; i++) {
//     cluster.fork();
//   }

//   cluster.on('online', (worker) => {
//     console.log('Worker %d is online', worker.process.pid)
//   });

//   cluster.on('exit', (worker, code, signal) => {
//     console.log('Worker %d died with code/signal %s. Restarting worker...', worker.process.pid, signal || code);

//     cluster.fork();
//   });
// } else {
//   const express = require('express');
//   const routes = require('./routes');
//   const path = require('path');
//   const redis = require('redis');
//   const fs = require('fs');

//   const app = express();
//   const port = process.env.PORT || 8080;

//   app.use('/', routes);

//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: err
//     });
//   });

//   app.all('/*', (req, res) => {
//     res.send('process ' + process.pid + ' says hello!').end();
//   });

//   app.listen(port, '0.0.0.0', (err) => {
//     if (err) {
//       console.log(err);
//     }

//     console.info(`🌎 Process ${process.pid} is listening to all incoming requests on port ${port} 🌎`);
//   });
// }
