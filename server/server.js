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


// ========TEST-------------------

app.get('/', (req, res) => {
    res.send('SO THIS SHOULD BE THE SITE')
})
console.log(`HELLO WORLD`)

app.post('/pay', async (req, res) => {
    console.log(req.body.token);
    await Stripe.charges.create({
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd',
    });
});

app.listen(port, () => {
    console.log(`running on port ${port}`)
})

// app.post('/pay', async (req, res) => {
//     console.log(req.body.token)
//     res.send('hello world')
//     await Stripe.charges.create({
//         source: req.body.token.id,
//         amount: req.body.amount,
//         currency: 'usd'
//     })
// });

// app.get('/static/*', async (req, res) => {
//     const path = `${__dirname}/client/${req.originalUrl}`
//     console.log('========', path);
//     await res.sendFile(path)
// });

// app.get('/*', async (req, res) => {
//     const path = __dirname + '/client/';
//     console.log(path);
//     await res.sendFile(path)
// });

// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });