
'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';

const LightDarkTracker = ({streak}) => {
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
            <div className='font-title text-2xl text-white py-2 pl-4'>Light/Dark Tracker</div>
            <div className='w-full flex pt-8 pb-4 gap-8 place-items-center place-content-center'>
                <div className='font-body'>
                    <div className='text-2xl'>600AM</div>
                    <div className='text-xxs'>sunrise time today</div>
                </div>
                <div className='font-body'>
                    <div className='text-2xl'>630PM</div>
                    <div className='text-xxs'>sunset time today</div>
                </div>
                <div className='font-body'>
                    <div className='text-2xl'>9</div>
                    <div className='text-xxs'>UV exposure</div>
                </div>
            </div>
            <div className='px-10 text-xs'>
                <div className='py-1'>Today you should aim to be outside in sunlight for 10 minutes at most, the UV exposure is higher</div>
                <div className='py-1'>Best to get your sunlight in the evening low light around 530-630pm</div>
            </div>
            
            <div className='flex place-content-end w-full pr-4'>
                <div className='bg-youu-ucla-blue gap-2 flex rounded-lg px-2 text-xxs'>
                    <div> Yesterday</div>
                    <div>|</div>
                    <div>Tomorrow</div>
                </div>
            </div>
            <div className='w-full text-center pt-4'>
                <div  className='py-2'>Did you go outside today?</div>
                <div className='flex w-full gap-2 place-content-center'><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>Yes</div><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>No</div></div>
            </div>
            
            <div className='p-10 '>
                <div className='text-center pb-6'>Streak: {streak}</div>
                <div className='flex place-content-center place-items-center'>
                    { streakGraf && <div className='flex flex-wrap'>{streakGraf}</div> }
                </div>
            </div>
        </div>
    )
}


export default LightDarkTracker;