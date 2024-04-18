import { loadStripe } from '@stripe/stripe-js'

const stripeKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || ''

export const stripePromise = loadStripe(stripeKey)
