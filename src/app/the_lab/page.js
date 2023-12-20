'use client'
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import { useUser } from "@/lib/hooks"

import LightDarkTracker from './lightDarkTracker';
import SleepHabit from './sleepHabit';
import WorkoutHabit from './workoutHabit';
import WorkoutBuilder from './workoutBuilder';
import NutritionTracker from './nutritionTracker';

/*
 * Parent component for Protocols
 * Responsible for pulling most of the data associated with a given user
*/

const TheLab = () => {
    const user = useUser({})
    //  const [editingName, setEditingName] = useState(false)
    
    const searchParams = useSearchParams()

    const [protocolCall, setProtocolCall] = useState()
    const [protocol, setProtocol] = useState()

    const [streak, setStreak] = useState(20)

    useEffect(() => {
        if(searchParams.has('protocol')){
            setProtocolCall(searchParams.get("protocol"))
            if(searchParams.get("protocol") === "light_dark_tracker"){
                setProtocol(<LightDarkTracker streak={streak} />)
            }else if(searchParams.get("protocol") === "sleep_habit"){
                setProtocol(<SleepHabit streak={streak} />)
            }else if(searchParams.get("protocol") === "workout_habit"){
                setProtocol(<WorkoutHabit streak={streak} />)
            }else if(searchParams.get("protocol") === "build_a_workout"){
                setProtocol(<WorkoutBuilder streak={streak} />)
            }else if(searchParams.get("protocol") === "nutrition_tracker"){
                setProtocol(<NutritionTracker streak={streak} />)
            }
        }else{
            setProtocolCall()
            setProtocol()
        }
    }, [searchParams])

    const logout = () => {
       //add later
       return null
    }

    return (
           <div className="p-1 bg-youu-dark-green min-h-screen w-screen">
               <div className='relative h-full rounded-xl  px-4 py-3 flex flex-col z-10 overflow-hidden'>
                   <div className='flex w-full bg-white px-4 py-3 rounded-lg place-items-end bg-opacity-80 z-10'>
                       <div className='w-1/5 text-center text-xl font-bold'>
                           <Link href="/">
                           Menu
                           </Link>
                       </div>
                       <div className='w-3/5 flex place-items-center place-content-center'>
                           <img src={"./logo.png"} className="h-9 w-9" />
                       </div>
                       <div className='w-1/5 text-center text-xl font-bold text-slate-600 hover-poiner'>
                           <Link href="/sub">
                           Join
                           </Link>
                       </div>
                   </div>
                   {
                    protocolCall && <div className='text-white font-thin pt-4 text-xs pl-4'><Link href="/the_lab"> - Go Back to theLab</Link></div>
                   }
                   <div className=''>
                    {   protocolCall ?
                        <div className='py-4 text-youu-lavender font-thin text-sm font-body'>
                            {protocol}
                        </div>
                        :
                        <div className="grid grid-cols-2 gap-1 pt-10">
                            <div className="flex bg-youu-lavender text-youu-ucla-blue rounded-xl py-4 px-6">
                                <Link href="/the_lab?protocol=light_dark_tracker">
                                    <div className="text-xl font-light">LD Tracker</div>
                                    <div className="my-auto"><img src="/figmaCons/fixYourBedTime.png"/></div>
                                </Link>
                            </div>
                            <div className="gap-1 flex flex-col">
                                <Link href="/the_lab?protocol=sleep_habit">
                                    <div className="flex place-items-center place-content-center bg-youu-english-violet text-youu-lavender rounded-xl py-4 px-6">
                                        <div className="text-xs font-light">Sleep Habit</div>
                                        <div className="my-auto ml-3"><img src="/figmaCons/sleepConsistency.png"/></div>
                                    </div>
                                </Link>
                                <Link href="/the_lab?protocol=workout_habit">
                                    <div className="flex bg-youu-reseda-green text-youu-dark-green rounded-xl py-4 px-6">
                                        <div className="text-xl font-light">Workout Habit</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="gap-1 flex flex-col">
                                <Link href="/the_lab?protocol=nutrition_tracker">
                                    <div className="flex place-items-center place-content-center bg-youu-english-violet text-youu-lavender rounded-xl py-4 px-6">
                                        <div className="text-xs font-light">Super Simple Nutrition Tracker</div>
                                        <div className="my-auto ml-3"><img src="/figmaCons/sleepConsistency.png"/></div>
                                    </div>
                                </Link>
                                <Link href="/the_lab?protocol=social_battery">
                                    <div className="flex bg-youu-reseda-green text-youu-dark-green rounded-xl py-4 px-6">
                                        <div className="text-xl font-light">Social Battery</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex bg-youu-lavender text-youu-ucla-blue rounded-xl py-4 px-6">
                                <Link href="/the_lab?protocol=build_a_workout">
                                    <div className="text-xl font-light">Build a Workout </div>
                                    <div className="my-auto"><img src="/figmaCons/fixYourBedTime.png"/></div>
                                </Link>
                            </div>                            
                        </div>                    
                    }
                   </div>
               </div>      
           </div>
           )
   }

export default TheLab