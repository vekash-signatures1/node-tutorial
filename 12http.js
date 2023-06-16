const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(
        `<!DOCTYPE html>
        <html>
            <head>
                <title>Page Not Found</title>
            </head>
            <body>
                <h1>Oops!</h1>
                <p>We can't seem to find the page you are looking for.</p>
                <a href="/">Back</a>
            </body>
        </html>`
    )
})

server.listen(3000)



// const server = http.createServer((req, res) => {
//     // console.log(req)
//     res.write('Hello world')
//     res.end()
// })

// server.listen(3001)




// const server = http.createServer((req, res) => {
//   // Send response in chunks
//   res.write('This is the first chunk. ');
//   res.write('This is the second chunk. ');

//   // End the response with a final chunk
//   res.end('This is the final chunk.');
// });

// server.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });
