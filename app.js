const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!1')
});

app.get('/products', (req, res) => {
    res.status(200).json({
        data: ['product 1', 'product 2']
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});