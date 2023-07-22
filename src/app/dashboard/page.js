'use client';

import { useUser } from "@/lib/hooks"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { BsPencil } from "react-icons/bs";

import logo from '../../../public/logo1.png'

const Dashbaord = () => {
     const user = useUser({ redirectTo: '/', redirectIfFound: false})
     const [editingName, setEditingName] = useState(false)

     const logout = () => {
        //add later
        return null
     }

     return (
            <div className="w-screen h-screen">
                <div className="w-full bg-onyx-black">
                    <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex-shrink-0 flex items-center">
                                <Image src={logo} className="w-16 sm:w-12"/>  
                                <span className="text-white font-bold text-lg">TheYouuProject</span>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex items-center">
                                    <Link href="/" as="/api/logout">Logout</Link>
                                    <div className="px-3 py-2 text-gray-300 hover:text-white">Make $</div>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button type="button" className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-500 focus:outline-none focus:bg-gray-500 focus:text-white">
                                <span className="sr-only">Details</span>
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden md:block">
                                <div className="flex items-center">
                                <Image className="h-8 w-8 rounded-full" src={logo} alt="Avatar"/>
                                <span className="ml-2 text-gray-300">100 tokens</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden" x-show="open">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/" className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md">Logout</Link>
                            <div href="#" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md">Make Money</div>
                        </div>
                        <div className="pt-4 pb-3 border-t border-gray-700">
                            <div className="flex items-center px-5">
                                <Image className="h-8 w-8 rounded-full" src={logo} alt="Avatar"/>
                                <span className="ml-3 text-base font-medium text-gray-300">100 tokens</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex text-white p-4 place-content-center mt-10">
                    <div className="px-2">Welcome Back </div> {editingName ? <div>What is your Name?</div> : <div className="flex gap-2" onClick={()=>setEditingName(true)}> {user && user.email} <BsPencil /></div>}
                </div>
                <div className="place-content-center place-items-center w-screen">
                    <div className="text-center text-white text-3xl font-black">
                        Pick an attribute you would you like to work on today?
                    </div>
                    <div className="flex flex-wrap gap-4 place-content-center p-6 text-white font-bold">
                        <div className="border-2 rounded-lg p-2">
                            Focus
                        </div>
                        <div className="border-2 rounded-lg p-2">
                            Motivation
                        </div>
                        <div className="border-2 rounded-lg p-2">
                            Strength
                        </div>
                        <div className="border-2 rounded-lg p-2">
                            Health
                        </div>
                        <div className="border-2 rounded-lg p-2">
                            Anxiety
                        </div>
                        <div className="border-2 rounded-lg p-2">
                            Prevent Burnout
                        </div>
                    </div>
                </div>
                <div className="w-screen grid grid-cols-3 p-10">
                    <div className="col-span-2 text-white">
                        <div className="p-2">
                            Your Favorited Protocols
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <div className="border-2 border-white h-48 w-56 rounded-md p-4">
                                Spotlighting
                            </div>
                            <div className="border-2 border-white h-48 w-56 rounded-md p-4">
                                Spotlighting
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 text-white font-extrabold">
                        Your Stats
                        <div className="flex-col-1">
                            <div className="grid grid-cols-8 text-white gap-2 p-2">
                                <div className="my-2 col-span-2 text-sm">
                                    Focus
                                </div>
                                <div className="col-span-6 relative w-full my-2">
                                    <div className="absolute rounded-md top-0 left-0 z-10 bg-purple-200 w-72 h-5">
                                    </div>
                                    <div className="absolute rounded-md top-0 left-0 z-20 bg-purple-500 h-5 w-5">                                        
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-8 text-white gap-2 p-2">
                                <div className="my-2 col-span-2 text-sm">
                                Strength
                                </div>
                                <div className="col-span-6 relative w-full my-2">
                                    <div className="absolute rounded-md top-0 left-0 z-10 bg-purple-200 w-72 h-5">
                                    </div>
                                    <div className="absolute rounded-md top-0 left-0 z-20 bg-purple-500 h-5 w-5">                                        
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-8 text-white gap-2 p-2">
                                <div className="my-2 col-span-2 text-sm">
                                Will Power
                                </div>
                                <div className="col-span-6 relative w-full my-2">
                                    <div className="absolute rounded-md top-0 left-0 z-10 bg-purple-200 w-72 h-5">
                                    </div>
                                    <div className="absolute rounded-md top-0 left-0 z-20 bg-purple-500 h-5 w-5">                                        
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-8 text-white gap-2 p-2">
                                <div className="my-2 col-span-2 text-sm">
                                Nutrition
                                </div>
                                <div className="col-span-6 relative w-full my-2">
                                    <div className="absolute rounded-md top-0 left-0 z-10 bg-purple-200 w-72 h-5">
                                    </div>
                                    <div className="absolute rounded-md top-0 left-0 z-20 bg-purple-500 h-5 w-5">                                        
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-8 text-white gap-2 p-2">
                                <div className="my-2 col-span-2 text-sm">
                                Recovery
                                </div>
                                <div className="col-span-6 relative w-full my-2">
                                    <div className="absolute rounded-md top-0 left-0 z-10 bg-purple-200 w-72 h-5">
                                    </div>
                                    <div className="absolute rounded-md top-0 left-0 z-20 bg-purple-500 h-5 w-5">                                        
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-8 text-white gap-2 p-2">
                                <div className="my-2 col-span-2 text-sm">
                                Biological Age
                                </div>
                                <div className="col-span-6 relative w-full my-2">
                                    <div className="absolute rounded-md top-0 left-0 z-10 bg-purple-200 w-72 h-5">
                                    </div>
                                    <div className="absolute rounded-md top-0 left-0 z-20 bg-purple-500 h-5 w-5">                                        
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-8 text-white gap-2 p-2">
                                <div className="my-2 col-span-2 text-sm">
                                Gut Health
                                </div>
                                <div className="col-span-6 relative w-full my-2">
                                    <div className="absolute rounded-md top-0 left-0 z-10 bg-purple-200 w-72 h-5">
                                    </div>
                                    <div className="absolute rounded-md top-0 left-0 z-20 bg-purple-500 h-5 w-5">                                        
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-8 text-white gap-2 p-2">
                                <div className="my-2 col-span-2 text-sm">
                                Hormone Health
                                </div>
                                <div className="col-span-6 relative w-full my-2">
                                    <div className="absolute rounded-md top-0 left-0 z-10 bg-purple-200 w-72 h-5">
                                    </div>
                                    <div className="absolute rounded-md top-0 left-0 z-20 bg-purple-500 h-5 w-5">                                        
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-8 text-white gap-2 p-2">
                                <div className="my-2 col-span-2 text-sm">
                                Sleep Health
                                </div>
                                <div className="col-span-6 relative w-full my-2">
                                    <div className="absolute rounded-md top-0 left-0 z-10 bg-purple-200 w-72 h-5">
                                    </div>
                                    <div className="absolute rounded-md top-0 left-0 z-20 bg-purple-500 h-5 w-5">                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="text-white font-extrabold m-2">
                            Your Stacks
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <div className="border-2 rounded-lg p-4">
                                Alpha GPC
                            </div>
                            <div className="border-2 rounded-lg p-4">
                                Alpha GPC
                            </div>
                            <div className="border-2 rounded-lg p-4">
                                Alpha GPC
                            </div>
                            <div className="border-2 rounded-lg p-4">
                                Alpha GPC
                            </div>
                                                        
                        </div>
                    </div>
                    <div className="col-span-2 text-white font-black m-2">
                        <div className="p-2">
                            Create Your Optimal Routine
                        </div>                        
                        <div className="flex flex-wrap gap-2">
                            <div className="border-2 border-white h-48 w-56 rounded-md p-4">
                                Spotlighting
                            </div>
                            <div className="border-2 border-white h-48 w-56 rounded-md p-4">
                                Spotlighting
                            </div>                                                    
                        </div>
                    </div>
                </div>
                <div className="m-2 p-10 w-full grid gap-2">
                    <div className="text-white font-black">
                        Our algos calculate when you need a reup:
                        <div className="text-white font-light">
                        (By our calcs you should be running out of the follwing)
                    </div>
                    </div>                    
                    <div className="flex flex-wrap gap-2">
                        <div className="border-2 rounded-lg p-4">
                            Alpha GPC
                        </div>
                        <div className="border-2 rounded-lg p-4">
                            Alpha GPC
                        </div>
                        <div className="border-2 rounded-lg p-4">
                            Alpha GPC
                        </div>
                        <div className="border-2 rounded-lg p-4">
                            Alpha GPC
                        </div>
                                                    
                    </div>
                </div>
                <div className="m-2 p-10 w-full grid gap-2">
                    <div className="text-white font-black">
                        Vote on which feature we should bild next!
                        <div className="text-white font-light">
                        (use your tokens to vote on what you would like to be built out next!)
                    </div>
                    </div>                    
                    <div className="flex flex-wrap gap-2">
                        <div className="border-2 rounded-lg p-4">
                            Alpha GPC
                        </div>
                        <div className="border-2 rounded-lg p-4">
                            Alpha GPC
                        </div>
                        <div className="border-2 rounded-lg p-4">
                            Alpha GPC
                        </div>
                        <div className="border-2 rounded-lg p-4">
                            Alpha GPC
                        </div>
                                                    
                    </div>
                </div>
            </div>
            )
    }

export default Dashbaord