'use client'

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js"
import { useState, useRef } from 'react';
import MagicButton from '@/components/UI/magicButton';

import { useUser } from "@/lib/hooks"
import { fetchPostJSON } from '@/utils/api-helpers';
import CoffeePaymentForm from '@/components/paymentForms/coffeePaymentForm';
import { Transition } from '@headlessui/react';
import getStripe from "@/utils/get-stripe"


//const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

const CheckOut = () => {
    const [errorMessage, setErrorMessage] = useState('')    
    const [customer, setCustomer] = useState('')
    const [subscription, setSubscription] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [selectedProduct, setSelectedProduct] = useState('')
    const [confirmed, setConfirmed] = useState('')


    const user = useUser()
    const testPlans = {
        'coffee': {'priceId': 'price_1Mgj34JZfOVbYKgsFaa4qOK3', 'amount': 800},
        'pizza': {'priceId': 'price_1Mgj3nJZfOVbYKgswry80ulI', 'amount': 2100},
        'coffee-monthly': {'priceId': 'price_1Mgj3vJZfOVbYKgsX5BwFvrJ', 'amount': 800},
        'pizza-monthly': {'priceId': 'price_1Mgj3tJZfOVbYKgsL84bazFJ', 'amount': 2100},
    }
    
    const selectProductHandler = async (product) => {
        selectedProduct === product ? setSelectedProduct('') : setSelectedProduct(product)
        confirmed && setConfirmed('')
        subscription && setSubscription('')
        if(!customer){
            try {
                const res = await fetchPostJSON('/api/createStripeCustomer', {
                    email: 'customer@bitoverflow.org',
                }).then((data) => {
                    setCustomer(data.customer)
                    console.log(data.customer)
                })
            }
            catch (error){
                console.error('An unexpected error happened occurred:', error)
                setErrorMessage(error.message)
            }
        }
    }

    const triggerCheckout = async (product) => {
        if(['coffee-monthly', 'pizza-monthly'].includes(product)){
            try {
                const res  = await fetchPostJSON('/api/createSubscription', {
                    priceId: testPlans[product].priceId,
                    customerId: customer.id,
                }).then((data) => {
                    setSubscription(data.subscriptionId)
                    setClientSecret(data.clientSecret)
                    setConfirmed(product)
                    console.log(data)
                })
            }
            catch (error){
                console.error('An unexpected error happened occurred:', error)
                setErrorMessage(error.message)
            }
        }else{
            try{
                await fetchPostJSON('/api/payment_intents', {
                    amount: testPlans[selectedProduct].amount,
                }).then((data) => {
                    setClientSecret(data.client_secret)
                    setConfirmed(product)                
                })
            }
            catch (error){
                setPayment({status: 'error'})
                setErrorMessage(error.message ?? 'An unknown error orrcurred')
            }
        }        
    }



    return (
        <div className={`h-screen place-content-center pt-20 ${confirmed ? 'w-auto px-20':'w-96'}`}>
            <div className={`grid ${confirmed ? 'sm:grid-cols-2' : 'sm:grid-cols-1'}`}>
                <div className='p-8'>
                    {/*Coffee-monthly payment flow */}
                    <div><MagicButton submitHandler={selectProductHandler} arg={'coffee-monthly'} label={'Coffee Recurring Monthly'}/></div>
                    <Transition
                        show={selectedProduct === 'coffee-monthly'}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-screen"
                        leave="transition-all ease-in-out duration-300"
                        leaveFrom="opacity-100 max-h-screen"
                        leaveTo="opacity-0 max-h-0"
                        >
                            <div className='grid sm:grid-2'>
                                <div
                                    className='bg-white rounded-lg shadow-lg p-4 m-2'
                                >
                                    <div className="font-bold text-xl mb-2">
                                        You just unlocked the "Savior of My Caffeine Addiction" badge!
                                        </div>
                                        <div className="text-gray-700 mb-4">
                                        You're keeping me awake, energized, and caffeinated enough to
                                        keep creating awesome stuff for you. Your contribution makes a
                                        big difference. Thank you from the bottom of my jittery heart.
                                    </div>
                                    <div>
                                        You will be charged $8/ month
                                        If you would only like to gift us coffee once select the 'Coffee One Time' option
                                    </div>
                                    { confirmed !== 'coffee-monthly' &&
                                        <button onClick={()=> triggerCheckout('coffee-monthly')} className='bg-purple-800 text-white hover:bg-green-300 hover:text-black rounded-md p-2'>Click to Confirm $8/month</button>
                                    }
                                    
                                </div>
                                <Transition 
                                    show={confirmed === 'coffee-monthly'}   
                                    enter="transition-all ease-in-out duration-1000"
                                    enterFrom="opacity-0 max-h-0"
                                    enterTo="opacity-100 max-h-screen"
                                    leave="transition-all ease-in-out duration-300"
                                    leaveFrom="opacity-100 max-h-screen"
                                    leaveTo="opacity-0 max-h-0"
                                    >
                                <div className='bg-white rounded-lg shadow-lg p-4 m-2'>
                                    testing child transisiton
                                </div>
                                </Transition>
                            </div>                                 
                    </Transition>

                    {/*Pizza-monthly payment flow */}
                    <div><MagicButton submitHandler={selectProductHandler} arg={'pizza-monthly'} label={'Pizza Recurring Monthly'}/></div>
                    <Transition
                        show={selectedProduct === 'pizza-monthly'}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-screen"
                        leave="transition-all ease-in-out duration-300"
                        leaveFrom="opacity-100 max-h-screen"
                        leaveTo="opacity-0 max-h-0"
                        >
                            <div className='grid sm:grid-2'>
                                <div
                                    className='bg-white rounded-lg shadow-lg p-4 m-2'
                                >
                                    <div className="text-gray-700 mb-4">
                                        Looks like someone's getting a pizza the action! 😂 Thank you so much for gifting us this tasty treat. We promise to use it to fuel our coding marathons and keep our creative juices flowing. We'll sneak in a slice or two for a quick coding break...
                                    </div>
                                    <div>
                                        You will be charged $21/ month
                                        If you would only like to gift us coffee once select the 'Coffee One Time' option
                                    </div>
                                    { 
                                    (confirmed) !== 'pizza-monthly' &&
                                        <button onClick={()=> triggerCheckout('pizza-monthly')} className='bg-purple-800 text-white hover:bg-green-300 hover:text-black rounded-md p-2'>Click to Confirm $21/month</button>
                                    }
                                </div>
                                <Transition 
                                    show={confirmed === 'pizza-monthly'}   
                                    enter="transition-all ease-in-out duration-1000"
                                    enterFrom="opacity-0 max-h-0"
                                    enterTo="opacity-100 max-h-screen"
                                    leave="transition-all ease-in-out duration-300"
                                    leaveFrom="opacity-100 max-h-screen"
                                    leaveTo="opacity-0 max-h-0"
                                    >
                                <div className='bg-white rounded-lg shadow-lg p-4 m-2'>
                                    testing child transisiton
                                </div>
                                </Transition>

                            </div>                           
                    </Transition>

                    <div><MagicButton submitHandler={selectProductHandler} arg={'coffee'} label={'Coffee One Time'}/></div>
                    <Transition
                        show={selectedProduct === 'coffee'}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-screen"
                        leave="transition-all ease-in-out duration-300"
                        leaveFrom="opacity-100 max-h-screen"
                        leaveTo="opacity-0 max-h-0"
                        >
                            <div className='grid sm:grid-2'>
                                <div className='bg-white rounded-lg shadow-lg p-4 m-2'>
                                    <div className="text-gray-700 mb-4">
                                        Wow, this is brew-tiful! ☕️ Thank you for gifting us this delicious coffee, we'll drink it up and brew up some amazing new features and updates for our platform. We're not just buzzed, we're downright jittery with excitement! 😜
                                    </div>
                                    <div>
                                        You will be charged $8 once
                                        If you would only like to gift us coffee every month select the 'Coffee Monthly' option
                                    </div>
                                    { confirmed !== 'coffee' &&
                                        <button onClick={()=> triggerCheckout('coffee')} className='bg-purple-800 text-white hover:bg-green-300 hover:text-black rounded-md p-2'>Click to Confirm $8</button>
                                    }
                                </div>
                                <Transition 
                                    show={confirmed === 'coffee'}   
                                    enter="transition-all ease-in-out duration-1000"
                                    enterFrom="opacity-0 max-h-0"
                                    enterTo="opacity-100 max-h-screen"
                                    leave="transition-all ease-in-out duration-300"
                                    leaveFrom="opacity-100 max-h-screen"
                                    leaveTo="opacity-0 max-h-0"
                                    >        
                                    <div className='bg-white rounded-lg shadow-lg p-4 m-2'>
                                        testing child transisiton
                                    </div>
                                </Transition>
                            </div>                                  
                    </Transition>                    
                    <div><MagicButton submitHandler={selectProductHandler} arg={'pizza'} label={'Pizza One Time'}/></div>
                    <Transition
                        show={selectedProduct === 'pizza'}
                        enter="transition-all ease-in-out duration-300"
                        enterFrom="opacity-0 max-h-0"
                        enterTo="opacity-100 max-h-screen"
                        leave="transition-all ease-in-out duration-300"
                        leaveFrom="opacity-100 max-h-screen"
                        leaveTo="opacity-0 max-h-0"
                        >
                            <div
                                className='bg-white rounded-lg shadow-lg p-4 m-2'
                            >
                                <div className="text-gray-700 mb-4">
                                    OMG, we're cheesin' so hard right now! 🍕🧀 Thank you for gifting us this delicious pizza. We'll savor every slice as we continue to work hard on making our platform even better. You know what they say, a pizza a day keeps the bugs away! 😜
                                </div>
                                <div>
                                    You will be charged $21 once
                                    If you would only like to gift us coffee every month select the 'Pizza Monthly' option
                                </div>
                                { (confirmed) !== 'pizza' &&
                                    <button onClick={()=> triggerCheckout('pizza')} className='bg-purple-800 text-white hover:bg-green-300 hover:text-black rounded-md p-2'>Click to Confirm $21</button>
                                }
                            </div>                                    
                    </Transition>           
                </div>
                {(subscription || ['coffee', 'pizza'].includes(confirmed)) && 
                    <div className='p-8'>
                            <Elements stripe={getStripe()} options={{
                                clientSecret: clientSecret,
                            }}>
                                <CoffeePaymentForm clientSecret={clientSecret} payment_id={testPlans[selectedProduct].priceId} amount={testPlans[selectedProduct].amount} single={confirmed === 'coffee'|| confirmed === 'pizza' && true}/>
                            </Elements>
                    </div>
                }
            </div>
        </div>
    )
}

export default CheckOut