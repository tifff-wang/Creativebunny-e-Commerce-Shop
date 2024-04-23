require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

exports.handler = async (event) => {
    try {
        const { amount } = JSON.parse(event.body)

        if (typeof amount !== 'number' || amount <= 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid or missing amount' }),
            }
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            automatic_payment_methods: {
                enabled: true,
            },
        })

        return {
            statusCode: 200,
            body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
        }
    } catch (error) {
        console.log({ error })

        return {
            statusCode: 400,
            body: JSON.stringify({ error: error.message }),
        }
    }
}
