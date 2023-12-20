
'use client'

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';

const WorkoutHabit = ({streak}) => {
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
            <div className='font-title text-2xl text-white py-2 pl-4'>Workout Habit</div>
            <div className='w-full flex flex-wrap pt-8 pb-4 gap-8 place-items-center place-content-center'>
                <div className='font-body'>
                    <div className='text-2xl'>1HR</div>
                    <div className='text-xxs'>Zone 2 Cardio</div>
                </div>
                <div className='font-body'>
                    <div className='text-2xl'>2HR</div>
                    <div className='text-xxs'>VO2 MAX</div>
                </div>
                <div className='font-body'>
                    <div className='text-2xl'>4HR</div>
                    <div className='text-xxs'>Resistance Training</div>
                </div>
                <div className='font-body'>
                    <div className='text-2xl'>2000</div>
                    <div className='text-xxs'>Calories Burnt</div>
                </div>
            </div>
            <div className='px-10 text-xs'>
                <div className='py-1'>Keep up the work! Don't forget to get 2more hrs of Zone 2 cardio for the best benchmarks!</div>
            </div>
            
            <div className='flex place-content-end w-full pr-4'>
                <div className='bg-youu-ucla-blue gap-2 flex rounded-lg px-2 text-xxs'>
                    <div> Yesterday</div>
                    <div>|</div>
                    <div>Tomorrow</div>
                </div>
            </div>
            <div className='p-10 '>
                <div className='text-center pb-6'>Streak: {streak}</div>
                <div className='flex place-content-center place-items-center'>
                    { streakGraf && <div className='flex flex-wrap'>{streakGraf}</div> }
                </div>
            </div>
            <div className='w-full text-center pt-4'>
                <div  className='py-2'>Did you get your workout in today?</div>
                <div className='flex w-full gap-2 place-content-center'><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>Yes</div><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>No</div></div>
            </div>
            <div className='w-full text-center pt-4'>
                <div  className='py-2'>What did you do?</div>
                <div className='flex w-full gap-2 place-content-center'><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>Vo2 Max</div><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>Zone 2 Cardio</div><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>Resistance</div><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>Other</div></div>
            </div>
            <div className='w-1/2 mx-auto  text-center pt-4'>
                <div  className='py-2'>What would be your ideal integration?</div>
                <div className='flex flex-col w-full gap-2 place-content-center'><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>Whoop</div><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>FitBit</div><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>Apple Watch</div><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>Garmen</div><div className='p-2 bg-youu-lavender text-youu-dark-green rounded-md'>8Sleep Mattress</div></div>
            </div>
        </div>
    )
}


export default WorkoutHabit;