'use client';

import { useUser } from "@/lib/hooks"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback  } from "react";
import { useRouter } from 'next/navigation'

import { Magic } from 'magic-sdk'

import logo from 'public/logo1.png'
import MagicButton from "@/components/UI/magicButton";

const Page = () => {
     const router = useRouter()
     const user = useUser()
     const [potentialEarning, setPotentialEarning] = useState(0)
     const [bookedDays, setBookedDays] = useState(3)
     const [bookedSessions, setBookedSessions] = useState(1)
     const [revealCalculations, setRevealCalculations] = useState(false)
     const [waitlistAppVisible, setWaitlistAppVisible] = useState(false)
     const [email, setEmail] = useState()
     const [inputServices, setinputServices] = useState([])
     const [showOther, setShowOther] = useState(false)
     const [otherVal, setOtherVal] = useState()
     const [cityVal, setCityVal] = useState()
     
     const convertToCurrency = (val) => {
        return val.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    }

     const increaseBookedSessions = () => {
        setBookedSessions(bookedSessions + 1)
    }

     const decreaseBookedSessions = () => {
        setBookedSessions(bookedSessions - 1)
    }

     const increaseBookedDays = () => {
        setBookedDays(bookedDays + 1)
    }

     const decreaseBookedDays = () => {
        setBookedDays(bookedDays - 1)
    }

     const viewCalculations = () => {
        setRevealCalculations(true)
    }

     const hideCalculations = () => {
        setRevealCalculations(false)
    }

     const handleApply = () => {
        setWaitlistAppVisible(true)
        //router.push('/buyUsCoffee/checkOut')
    }

    const toggleService = (val) => {
        if(inputServices.includes(val)){
            setinputServices(inputServices.filter((item) => item !== val))
        } else {
            setinputServices([...inputServices, val])
        }
    }

    async function handleWaitlistSubmit(){

        console.log(
            'email: ', email,
            'inputServices: ', inputServices,
            'otherVal: ', otherVal,
            'cityVal: ', cityVal
        )

        if(user && user.email){
            const body = {
                "email": user.email,
                "inputServices": inputServices,
                "otherVal": otherVal,
                "cityVal": cityVal
            }
            const res = await fetch('/api/fireIceWaitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            if (res.status === 201) {
                router.push('/dashboard')
            } else {
                throw new Error(await res.text())
            }
        } else {
            //user has not been registered yet
            try {
                const loginBody = {
                    email: email,
                }
                const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY)
                const didToken = await magic.auth.loginWithMagicLink({
                    email: email,
                })
                const res = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + didToken,
                    },
                    body: JSON.stringify(loginBody),
                })
                if (res.status === 200) {
                    const body = {
                        "email": email,
                        "inputServices": inputServices,
                        "otherVal": otherVal,
                        "cityVal": cityVal
                    }
                    const res2 = await fetch('/api/fireIceWaitlist', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(body),
                    })
                    if (res2.status === 201) {
                        router.push('/dashboard')
                    } else {
                        throw new Error(await res.text())
                    }
                    //router.push('/buyUsCoffee')
                } else {
                    throw new Error(await res.text())
                }
            } catch (error) {
                console.error('An unexpected error happened occurred:', error)
                //setErrorMsg(error.message)
            }
        }        
    }



     useEffect(() => {
        setPotentialEarning(bookedDays * bookedSessions * 50 * 4)
    }, [bookedDays, bookedSessions])


    return (
        <div className="w-full">
            <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 bg-white">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Image src={logo} className="w-16 sm:w-12 px-2"/>  
                        <span className="font-black text-lg">TheYouuProject</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center">
                        <Image className="h-8 w-8 rounded-full" src={logo} alt="Avatar"/>
                        <span className="ml-2 text-gray-300">100 tokens</span>
                        </div>
                    </div>
                </div>
            </div>
            { !(waitlistAppVisible) &&
            <div className="grid grid-cols-2 bg-white mx-auto p-10">
                <div className="text-center p-10 py-20">
                    <div className="text-xl font-bold">
                        Have a ice bath, sauna, hot tub or cryo chamber?
                    </div>
                    <div className="text-4xl font-black text-nft-purple">
                        List it.
                    </div>
                    <div className="text-4xl font-bold">
                        You could earn
                    </div>
                    <div className="text-5xl font-black p-4">
                        {convertToCurrency(potentialEarning)}
                    </div>
                    <div className="my-2 flex place-content-center">
                        <div className="flex">
                            {bookedSessions > 1 && <div className="px-2 text-lg cursor-pointer hover:text-nft-aqua hover:text-xl hover:font-black" onClick={decreaseBookedSessions}>-</div>}
                            <div className="flex rounded-full bg-black text-white px-3 py-1">
                                {bookedSessions} booking(s)/ day
                            </div>
                            {bookedSessions < 10 && <div className="px-1 text-lg cursor-pointer hover:text-nft-orange hover:text-xl hover:font-black" onClick={increaseBookedSessions}>+</div>}
                        </div>
                        <div className="py-1"></div>
                    </div>
                    <div className="">at an estimated $30 per session</div>
                    <div className="my-2 flex place-content-center">
                        <div className="flex">
                            {bookedDays > 1 && <div className="px-2 text-lg cursor-pointer hover:text-nft-aqua hover:text-xl hover:font-black" onClick={decreaseBookedDays}>-</div>}
                            <div className="flex rounded-full bg-black text-white px-3 py-1">
                                {bookedDays} day(s) per week
                            </div>
                            {bookedDays < 7 && <div className="px-1 text-lg cursor-pointer hover:text-nft-orange hover:text-xl hover:font-black" onClick={increaseBookedDays}>+</div>}
                        </div>
                    </div>
                    <div className="p"> for 1 month</div>
                    <div className="text-sm text-slate-500 underline hover:text-nft-blue cursor-pointer" onClick={viewCalculations}>
                        Learn how we estimate your earnings
                    </div>
                    {revealCalculations && 
                        <div className="text-sm text-black w-96 mx-auto mt-2">
                            <div className="p-1">
                                Typically a business (not in expensive cities like New York) charge $50 1st time pass for a visitor using Cryo/another service. For non-first time visitors businesses end up charging anywhere from $80 - $100 or more. 
                            </div>
                            <div className="p-1">
                                By our measure, charging a client a flat $30 per session is a great deal for the client and a great deal for you. However the price you will charge is up to you. 
                            </div>
                            <div className="p-1">
                                When we launch this feauture we will provide more detailed data aggregates of what businesses in your area are charging. And what price points will provide the best return for you.
                            </div>
                            <div className="p-1">
                                As far as time frames we are assuming 1 month = 4 weeks and tehre are 7 days per week
                            </div>
                            <div className="flex place-content-center p-2">
                                <div className="w-12 bg-black text-white font-bold cursor-pointer hover:text-black hover:bg-white rounded-full" onClick={hideCalculations}>x</div>
                            </div>
                        </div>
                        
                    }
                    <div className="flex place-content-center mt-4">
                        <MagicButton submitHandler={handleApply} label={'Apply to Host'} color={'pink'}/>
                    </div>
                </div>
                <div>
                    <div>
                        What are businesses charging?
                    </div>
                </div>
            </div>
            }
            {
                waitlistAppVisible &&
                <div className="grid bg-white mx-auto p-10 place-content-center">
                    { 
                    user ? 
                        <div> {user.email}</div>
                        :
                        <div>
                            <div> Enter your email: </div>
                            <input type="email" className="w-full border-2 rounded-lg border-black p-2 m-2" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                    }
                    <div className="font-bold text-xl">Which of the following do you have?</div>
                    <div className="flex flex-wrap font-bold m-2">
                        <div className={`p-3 cursor-pointer rounded-md m-2 ${inputServices.includes('Steam Room') ? 'hover:bg-youu-sky-pink hover:text-black bg-black text-white' : 'bg-youu-sky-pink hover:bg-black hover:text-white' }`} onClick={()=>toggleService('Steam Room')}>Steam Room</div>
                        <div className={`p-3 cursor-pointer rounded-md m-2 ${inputServices.includes('Sauna') ? 'hover:bg-youu-sky-pink hover:text-black bg-black text-white' : 'bg-youu-deep-red text-white hover:bg-black hover:text-white' }`} onClick={()=>toggleService('Sauna')}>Sauna</div>
                        <div className={`p-3 cursor-pointer rounded-md m-2 ${inputServices.includes('Hot Tub') ? 'hover:bg-youu-sky-pink hover:text-black bg-black text-white' : 'bg-nft-orange hover:bg-black hover:text-white' }`} onClick={()=>toggleService('Hot Tub')}>Hot Tub</div>
                        <div className={`p-3 cursor-pointer rounded-md m-2 ${inputServices.includes('Cryotherapy') ? 'hover:bg-youu-sky-pink hover:text-black bg-black text-white' : 'bg-nft-glow hover:bg-black hover:text-white' }`} onClick={()=>toggleService('Cryotherapy')}>Cryotherapy</div>
                        <div className={`p-3 cursor-pointer rounded-md m-2 ${inputServices.includes('Home Made Ice Bath') ? 'hover:bg-youu-sky-pink hover:text-black bg-black text-white' : 'bg-nft-aqua hover:bg-black hover:text-white' }`} onClick={()=>toggleService('Home Made Ice Bath')}>Home Made Ice Bath</div>
                        <div className={`p-3 cursor-pointer rounded-md m-2 ${inputServices.includes('Ice Bath') ? 'hover:bg-youu-sky-pink hover:text-black bg-black text-white' : 'bg-nft-blue hover:bg-black hover:text-white' }`} onClick={()=>toggleService('Home Made Ice Bath')}>Ice Bath</div>
                    </div>
                    <div className="p-2">
                        <div className="p-3 bg-onyx-black text-white hover:bg-youu-sky-pink hover:text-black cursor-pointer rounded-md mx-2 font-bold" onClick={() => setShowOther(true)}>Other</div>
                        {
                            showOther &&
                                <div>
                                    Please specify what you have:
                                    <input type="text" className="w-full border-2 rounded-lg border-black p-2 m-2" value={otherVal} onChange={e => setOtherVal(e.target.value)} maxLength={200}/>
                                </div>
                        }
                    </div>
                    <div className="p-2">
                        <div>
                            Which city + country are you located in?
                        </div>
                        <input type="text" className="w-full border-2 rounded-lg border-black p-2 m-2" value={cityVal} onChange={e => setCityVal(e.target.value)} maxLength={40}/>
                    </div>

                    <div className="flex place-content-center">
                        <MagicButton submitHandler={() => handleWaitlistSubmit()} label={'Submit'} color={'pink'}/>
                    </div>                    
                </div>
            }
        </div>    
        )
    }

export default Page;