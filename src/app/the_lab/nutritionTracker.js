
'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';

const NutritionTracker = ({streak}) => {
    //const [streak, setStreak] = useState(0)
    const [streakGraf, setStreakGraf] = useState(0)
    const [textContent, setTextContent] = useState('');

    useEffect(() => {
        if(streak){
            let divs = Array.from({length: streak}).map((_, index) => {
                return <div key={index} className='bg-white rounded-sm h-3 w-3'/>
            })
            console.log(divs)
            setStreakGraf(divs)
        }else{
            setStreakGraf(<div className='bg-black rounded-sm h-3 w-3'></div>)
        }
    }, [streak]);

    return (
        <div className=''>
            <div className='font-title text-2xl text-white py-2 pl-4'>The Super Simple Nutrition Tracker</div>
            <div className='p-10 '>
                <div className='text-center pb-6'>Streak: {streak}</div>
                <div className='flex place-content-center place-items-center'>
                    { streakGraf && <div className='flex flex-wrap'>{streakGraf}</div> }
                </div>
            </div>
            <div className='w-full text-center pt-4'>
                <div  className='py-2'>Did you get you eat all whole foods today?</div>
                <div className='flex w-full gap-2 place-content-center'><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>Yes</div><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>No</div></div>
            </div>
            <div className='w-full text-center pt-4'>
                <div  className='py-2'>Lifetime and subscribers will have instant AI nutritional analizer. Describe your food, and AI will give you an estimate of the nutrients you ate?</div>
            </div>
        </div>
    )
}


export default NutritionTracker;