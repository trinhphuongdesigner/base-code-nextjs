// const express = require('express');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();
// const server = express();

// app.prepare()
//     .then(() => {

//     	// Slug on url
//         server.get('/post/:postId', (req, res) => {
//             console.log(req.params.postId);
//             return app.render(req, res, '/post', { postId: req.params.postId })
//         });

//         server.get('*', (req, res) => {
//             return handle(req, res);
//         });

//         server.listen(3000, err => {
//             if (err) console.log(err)
//             console.log('> Ready on port 3000');
//         })
//     })
//     .catch(err => {
//         console.log(err);
//         process.exit();
//     });
