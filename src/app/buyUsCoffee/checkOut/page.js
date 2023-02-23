'use client'

import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { useEffect, useState } from 'react';
import MagicButton from '@/components/UI/magicButton';

import { useUser } from "@/lib/hooks"
import { fetchPostJSON } from '@/utils/api-helpers';
import CoffeePaymentForm from '@/components/paymentForms/coffeePaymentForm';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckOut = () => {
    const [errorMessage, setErrorMsg] = useState('')    
    const [customer, setCustomer] = useState('')
    const [subscription, setSubscription] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const user = useUser()
    const testPlans = {
        'coffee': 'price_1MeYrgJZfOVbYKgsyTj5vSVi',
        'pizza': ''
    }
    
    const selectProductHandler = async (product) => {
        try {
            const res = await fetchPostJSON('/api/createStripeCustomer', {
                email: user.email,
            }).then((data) => {
                setCustomer(data.customer)
                triggerCheckout(product)
            })
        }
        catch (error){
            console.error('An unexpected error happened occurred:', error)
            setErrorMsg(error.message)
        }
    }

    const triggerCheckout = async (product) => {
        try {
            const res  = await fetchPostJSON('/api/createSubscription', {
                priceId: testPlans[product],
                customerId: customer.id,
            }).then((data) => {
                setSubscription(data.subscriptionId)
                setClientSecret(data.clientSecret)
            })
        }
        catch (error){
            console.error('An unexpected error happened occurred:', error)
            setErrorMsg(error.message)
        }
    }



    return (
        <div className='h-screen place-content-center pt-20 w-96'>
            <div><MagicButton submitHandler={selectProductHandler} arg={'coffee'} label={'Coffee'}/></div>
            {subscription && 
                <Elements stripe={stripePromise} options={{
                    clientSecret: clientSecret,
                }}>
                    <CoffeePaymentForm clientSecret={clientSecret} />
                </Elements>
            }
        </div>
    )
}

export default CheckOut