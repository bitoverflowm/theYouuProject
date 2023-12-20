
'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';

const WorkoutBuilder = ({streak}) => {
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
            <div className='font-title text-2xl text-white py-2 pl-4'>Build A Workout</div>
            <div className='w-full pt-8 pb-4 gap-8 place-items-center place-content-center text-center'>
                <div>We plan on coding this workout PDF up into a protocol.</div>
                <div>Would that be helpful?</div>
                <div className='flex w-full gap-2 place-content-center'><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>Yes</div><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>No</div></div>
            </div>
            <div className='px-10 text-xs text-center'>
                <div className='py-1'>Today you should aim to be outside in sunlight for 10 minutes at most, the UV exposure is higher</div>
                <div className='py-1'>Best to get your sunlight in the evening low light around 530-630pm</div>
                
            </div>
            
            <div className='flex pt-6 w-full place-content-center'>
                <Link href="https://www.hubermanlab.com/newsletter/foundational-fitness-protocol">
                    <div className='bg-youu-ucla-blue gap-2 flex rounded-lg px-2 text-xxs'>
                        In the mean time here is the link to Huberman's protocol
                    </div>
                </Link>
            </div>
        </div>
    )
}


export default WorkoutBuilder;