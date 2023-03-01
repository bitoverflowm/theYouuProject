import { useEffect, useState } from 'react';
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"

import { fetchPostJSON } from '@/utils/api-helpers';

const CoffeePaymentForm = (props) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [payment, setPayment] = useState({status: 'initial'})
    const [paymentIntent, setPaymentIntent] = useState('')
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [fullName, setFullName] = useState('')
    const [paymentType, setPaymentType] = useState('')
    //for 1 time payment
    const [clientSecret, setClientSecret] = useState('')

    const client_secret = props.clientSecret

    const stripe = useStripe()
    const elements = useElements()

     useEffect(() => {
        fetchPostJSON('/api/payment_intents', {
            amount: props.amount,
        }).then((data) => {
            setPaymentIntent(data)
        })
    }, [setPaymentIntent])

    const paymentHandler = async (e) => {
        e.preventDefault()
        if(!e.currentTarget.checkValidity()){
            return
        }
        if(!elements) return
        setPayment({status: 'processing'})

        if(props.single){
            const {error} = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: 'http://www.theyouuproject.com/',
                    payment_method_data: {
                        billing_details: {
                            name: fullName,
                        }
                    },
                }
            })
            if (error) {
                setPayment({status: 'error'})
                setErrorMessage(error.message ?? 'An unknown error orrcurred')
            } else if (paymentIntent){
                setPayment(paymentIntent)
            }
        }
        else {
            try{
                await fetchPostJSON('/api/payment_intents', {
                    amount: props.amount,
                    payment_intent_id: paymentIntent.id,
                    client_secret: client_secret,
                }).then((data) => {
                    setClientSecret(data.client_secret)
                    setPayment(data)
                })
            } catch (error) {
                setPayment({status: 'error'})
                setErrorMessage(response.message)
                return
            }               
    
            const {error} = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: 'http://www.theyouuproject.com/',
                    payment_method_data: {
                        billing_details: {
                            name: fullName,
                        }
                    },
                }
            })
            if (error) {
                setPayment({status: 'error'})
                setErrorMessage(error.message ?? 'An unknown error orrcurred')
            } else if (paymentIntent){
                setPayment(paymentIntent)
            }
        }        
    }

    const handleInputChange = (e) => { setFullName(e.currentTarget.value)}

    return (
        <div className='max-w-96'>
        <form onSubmit={paymentHandler}>
            <input
                placeholder="Cardholder Name"
                className="border-2 w-full p-1 rounded-md my-2"
                type="Text"
                name="fullName"
                onChange={handleInputChange}
                required
            />
            <div>
                <PaymentElement 
                    onChange = {(e) => {
                        setDisabled(e.empty)
                        setErrorMessage(e.error ? e.error.message: "")
                        setPaymentType(e.value.type)
                        }}
                    />
            </div>                   
            <button 
                disabled={processing || disabled || succeeded}
                className="font-bold p-4 bg-green-400 w-full rounded-md my-2" type="submit">
                    Lets Goo!
            </button>
            {errorMessage && <p className="error">{errorMessage}</p>}
        </form>
        </div>
    )

}


export default CoffeePaymentForm