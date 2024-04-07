// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KpxTKDntyxdAFDqfpN9DI04I49imFvoGiZuN3ft6ZLhcUkGuvoqO3K4FGpTMBZxBwyjuYIWaFWA0DrhYqhQbFiJ00d0YKH0h5"
);

// API

// APP CONFIG

const app = express();

// MIDDLEWARE

app.use(cors({ origin: true }));
app.use(express.json());

// API ROUTS

app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
  const total = req.query;
   console.log(total.total)
  const paymentIntent = await stripe.paymentIntents.create({
    amount:total.total,// get the total from getTotal method in the reducer.
    currency: "usd"
  });
  res.status(201).send({ clientSecret: paymentIntent.client_secret });
});

//LISTEN COMMAND

exports.api = functions.https.onRequest(app);
