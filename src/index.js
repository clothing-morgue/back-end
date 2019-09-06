import 'dotenv/config';
import cors from 'cors';
import express from 'express';

console.log('Hello, Visual Studio programmer! \n \n Remember to have fun! \n');

console.log(process.env.MY_SECRET);

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from Node!');
});

app.get('/test', (req, res) => {
    res.send('Hello from test!');
});

app.listen(process.env.PORT, () =>
    console.log(`\n Clothing Morgue listening on port ${process.env.PORT}! \n`));