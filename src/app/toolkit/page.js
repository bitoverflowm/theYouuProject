'use client';

import { useUser } from "@/lib/hooks"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { BsPencil } from "react-icons/bs";

import logo from '../../../public/logo.png'

const Toolkit = () => {
     const user = useUser({})
     const [editingName, setEditingName] = useState(false)

     const logout = () => {
        //add later
        return null
     }

     return (
            <div className="p-1 bg-youu-dark-green h-auto">
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
                    <div className='h-16 flex flex-wrap w-full font-medium bg-youu-lavender px-4 py-3 rounded-lg mt-2 z-10 '>
                        <div className='text-xs text-youu-dark-green font-black '>
                            <Link href="/sub" className='hover-poiner'>
                                Join now for early access, <span className="underline">pay what you want</span> 
                            </Link>
                        </div>
                        <div className="text-xs font-black dont-body">
                        (only for the next 4 days)
                        </div>
                    </div>
                    <div className='pt-12 pb-3 z-10 pl-5'>
                        <div className='text-white font-black text-5xl font-title text-youu-lavender'>The Tool Shed</div>
                        <div className='py-4 text-youu-lavender font-thin text-sm'>
                            <div className='font-body'>
                            Here you will find an assortment of tools.
                            </div>
                            <div>
                            To help you in your journey of life.
                            </div>
                        </div>
                    </div>
                    {/* Mental Health Tool Kit preview */}
                    <div className="p-1 rounded-lg bg-gradient-to-b from-youu-reseda-green/80 to-youu-dark-green mx-4">
                        <div className="bg-youu-dark-green p-6 rounded-xl">
                            <div className="font-title text-4xl font-black text-youu-reseda-green">
                                Our <div className="text-lg font-thin">Newest Collection</div>
                            </div>
                            <div className="text-youu-lavender text-xs pt-3 shadow-2xl shadow-white w-32 underline">
                                Mental Health Tool Kit
                            </div>
                            <div className="text-youu-lavender text-xs pt-1">
                                A set of tools to help you feel good.
                            </div>
                            <div className="grid grid-cols-2 place-content-center place-items-center gap-6 pt-6 text-youu-lavender">
                                <div className="font-title text-center">
                                    <div><img src="/figmaCons/pillar1.png"/></div>
                                    <div className="font-black pt-2">Pillar 1</div>
                                    <div className="text-xxs -mt-1">Sleep</div>
                                </div>
                                <div className="font-title text-center">
                                    <div><img src="/figmaCons/pillar2.png"/></div>
                                    <div className="font-black pt-2">Pillar 2</div>
                                    <div className="text-xxs -mt-1">Light/ Dark</div>
                                </div>
                                <div className="font-title text-center">
                                    <div><img src="/figmaCons/pillar3.png"/></div>
                                    <div className="font-black pt-2">Pillar 3</div>
                                    <div className="text-xxs -mt-1">Movement</div>
                                </div>
                                <div className="font-title text-center">
                                    <div><img src="/figmaCons/pillar4.png"/></div>
                                    <div className="font-black pt-2">Pillar 4</div>
                                    <div className="text-xxs -mt-1">Nutrition</div>
                                </div>
                            </div>
                            <div className="font-body text-xs w-44 rounded-lg text-white text-center bg-youu-ucla-blue mx-auto mt-8 py-2 mt-4"><Link href="https://post.theyouuproject.com/the-mental-health-tool-kit/"> Go to Mental Health Tool Kit</Link></div>
                        </div>                       
                    </div>
                    <div className='pt-4 pb-3 pl-5'>
                        <div className='py-4 text-youu-lavender font-thin text-sm font-body'>
                            Popular among young adults
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                            <div className="flex bg-youu-lavender text-youu-ucla-blue rounded-xl py-4 px-6">
                                <div className="text-xl font-light">Fix Your Bedtime</div>
                                <div className="my-auto"><img src="/figmaCons/fixYourBedTime.png"/></div>
                            </div>
                            <div className="gap-1 flex flex-col">
                                <div className="flex place-items-center place-content-center bg-youu-english-violet text-youu-lavender rounded-xl py-4 px-6">
                                    <div className="text-xs font-light">Sleep Consistency Challenge</div>
                                    <div className="my-auto ml-3"><img src="/figmaCons/sleepConsistency.png"/></div>
                                </div>
                                <div className="flex bg-youu-reseda-green text-youu-dark-green rounded-xl py-4 px-6">
                                    <div className="text-xl font-light">Pre-Study Supplements</div>
                                </div>
                            </div>                            
                        </div>
                        <div className='py-4 text-youu-lavender font-thin text-sm font-body'>
                            Achieve
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                            <div className="flex bg-youu-lavender text-youu-ucla-blue rounded-xl py-4 px-6">
                                <div className="text-xl font-light">Focus Longer</div>
                                <div className="my-auto"><img src="/figmaCons/fixYourBedTime.png"/></div>
                            </div>
                            <div className="flex bg-youu-lavender text-youu-ucla-blue rounded-xl py-4 px-6">
                                <div className="text-xl font-light">Eat Betterr</div>
                                <div className="my-auto"><img src="/figmaCons/fixYourBedTime.png"/></div>
                            </div>
                            <div className="flex bg-youu-lavender text-youu-ucla-blue rounded-xl py-4 px-6">
                                <div className="text-xl font-light">Get Stronger</div>
                                <div className="my-auto"><img src="/figmaCons/fixYourBedTime.png"/></div>
                            </div>
                            <div className="gap-1 flex flex-col">
                                <div className="flex place-items-center place-content-center bg-youu-english-violet text-youu-lavender rounded-xl py-4 px-6">
                                    <div className="text-xs font-light">Sleep Consistency Challenge</div>
                                    <div className="my-auto ml-3"><img src="/figmaCons/sleepConsistency.png"/></div>
                                </div>
                                <div className="flex bg-youu-reseda-green text-youu-dark-green rounded-xl py-4 px-6">
                                    <div className="text-xl font-light">Pre-Study Supplements</div>
                                </div>
                            </div>
                            <div className="gap-1 flex flex-col">
                                <div className="flex place-items-center place-content-center bg-youu-english-violet text-youu-lavender rounded-xl py-4 px-6">
                                    <div className="text-xs font-light">Sleep Consistency Challenge</div>
                                    <div className="my-auto ml-3"><img src="/figmaCons/sleepConsistency.png"/></div>
                                </div>
                                <div className="flex bg-youu-reseda-green text-youu-dark-green rounded-xl py-4 px-6">
                                    <div className="text-xl font-light">Pre-Study Supplements</div>
                                </div>
                            </div> 
                            <div className="flex bg-youu-lavender text-youu-ucla-blue rounded-xl py-4 px-6">
                                <div className="text-xl font-light">Be Happier</div>
                                <div className="my-auto"><img src="/figmaCons/fixYourBedTime.png"/></div>
                            </div>                                                                                   
                        </div>
                        <div className='py-4 text-youu-lavender font-thin text-sm font-body'>
                            Tools and Protocols
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                            <div className="flex bg-youu-lavender text-youu-ucla-blue rounded-xl py-4 px-6">
                                <div className="text-xl font-light">Simple Food Tracker</div>
                                <div className="my-auto"><img src="/figmaCons/fixYourBedTime.png"/></div>
                            </div>
                            <div className="flex bg-youu-lavender text-youu-ucla-blue rounded-xl py-4 px-6">
                                <div className="text-xl font-light">Social Battery</div>
                                <div className="my-auto"><img src="/figmaCons/fixYourBedTime.png"/></div>
                            </div>
                            <div className="flex bg-youu-lavender text-youu-ucla-blue rounded-xl py-4 px-6">
                                <div className="text-xl font-light">Sigh for Stress Control</div>
                                <div className="my-auto"><img src="/figmaCons/fixYourBedTime.png"/></div>
                            </div>
                            <div className="gap-1 flex flex-col">
                                <div className="flex place-items-center place-content-center bg-youu-english-violet text-youu-lavender rounded-xl py-4 px-6">
                                    <div className="text-xs font-light">Cold Exposure</div>
                                    <div className="my-auto ml-3"><img src="/figmaCons/sleepConsistency.png"/></div>
                                </div>
                                <div className="flex bg-youu-reseda-green text-youu-dark-green rounded-xl py-4 px-6">
                                    <div className="text-xl font-light">Pre-Study Supplements</div>
                                </div>
                            </div>
                            <div className="gap-1 flex flex-col">
                                <div className="flex place-items-center place-content-center bg-youu-english-violet text-youu-lavender rounded-xl py-4 px-6">
                                    <div className="text-xs font-light">Workout Tracker</div>
                                    <div className="my-auto ml-3"><img src="/figmaCons/sleepConsistency.png"/></div>
                                </div>
                                <div className="flex bg-youu-reseda-green text-youu-dark-green rounded-xl py-4 px-6">
                                    <div className="text-xl font-light">Workout Builder</div>
                                </div>
                            </div> 
                            <div className="flex bg-youu-lavender text-youu-ucla-blue rounded-xl py-4 px-6">
                                <div className="text-xl font-light">Spotlighting</div>
                                <div className="my-auto"><img src="/figmaCons/fixYourBedTime.png"/></div>
                            </div>
                        </div>
                        <div className='py-4 text-youu-lavender font-thin text-sm font-body'>
                            Health Tests (coming soon)
                        </div>
                        <div className='py-4 text-youu-lavender font-thin text-sm font-body'>
                            Wearable Integrations (coming soon)
                        </div>                                                                                   
                        <div className='py-4 text-youu-lavender font-thin text-sm font-body'>
                            Supplements (coming soon)
                        </div>
                        <div className='py-4 text-youu-lavender font-thin text-sm font-body'>
                            Merch (coming soon)
                        </div>
                    </div>
                </div>      
            </div>
            )
    }

export default Toolkit