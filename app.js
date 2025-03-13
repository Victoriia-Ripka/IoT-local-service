const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json()); 
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/data', (req, res) => {
    console.log('Отримано запит:', req.body);

    if (!req.body.current) {
        return res.status(400).send({ error: "Missing 'current' field" });
    }

    console.log(`Струм: ${req.body.current} A`);
    res.send({ message: 'Дані отримані!', received: req.body });
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on port 3000');
});


//  node app.js 