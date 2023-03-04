/*
* get stripe singleton so we only instantiate Stripe once
*/

import { Stripe, loadStripe } from '@stripe/stripe-js'

let stripePromise

const getStripe = () => {
    if (!stripePromise) {
        process.env.NODE_ENV === 'production' 
        ? stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
        : stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_DEV_PUBLISHABLE_KEY)
    }

    return stripePromise
}

export default getStripe