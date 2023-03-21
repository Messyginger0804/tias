const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const port = process.env.PORT;
const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/pay', async (req, res) => {
    console.log(req.body.token)
    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    })
});

app.get('/static/*', async (req, res) => {
    const path = `${__dirname}/client/build${req.originalUrl}`
    console.log('========', path);
    await res.sendFile(path)
});

app.get('/*', async (req, res) => {
    const path = __dirname + '/client/build/index.html';
    console.log(path);
    await res.sendFile(path)
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});