'use client';

import { useUser } from "@/lib/hooks"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { BsPencil } from "react-icons/bs";

import logo from '../../../public/logo1.png'

import NaturalHotColdCard from "@/components/UI/hotColdCards/naturalHotColdCard";
import NotNaturalHotColdCard from "@/components/UI/hotColdCards/notNaturalHotColdCard";

const ColdHotFinder = () => {
     const user = useUser()

     const coldHotdata = [
        {
            id: 0,
            nature: false,
            name: 'Cold Plunge X',
            city: 'San Diego',
            state: 'CA',
            address: '1234 Main St',
            phone: '123-456-7890',
            website: 'www.coldplungex.com',
            description: 'This is a description of the cold plunge',
            image: '/images/coldPlunge.jpg',
            services: ['Cold Plunge'],
            rating: 4.5,
            visits: 100,
            hours: [{
                day: 'Monday', hours: '9am - 5pm'
                }, {
                    day: 'Tuesday', hours: '9am - 5pm'
                }, {
                    day: 'Wednesday', hours: '9am - 5pm'
                }, {
                    day: 'Thursday', hours: '9am - 5pm'
                }, {
                    day: 'Friday', hours: '9am - 5pm'
                }, {
                    day: 'Saturday', hours: '9am - 5pm'
                }, {
                    day: 'Sunday', hours: '9am - 5pm'
                }],
            startingPrice: 20,
            promotion: true,
            promotionDescription: 'This is a promotion',
        },
        {
            id: 1,
            nature: true,
            name: 'Wild Willys',
            city: 'Mammoth Lakes',
            state: 'CA',
            address: 'Hwy 395 Benton Crossing Rd',
            phone: '123-456-7890',
            website: 'www.willies.com',
            description: 'One of the most easily accessible natural hot springs in California',
            image: '/images/hotAndCold/nature/hotSpring/wildwilly.png',
            services: ['Hot Spring'],
            rating: 5,
            visits: 1000,
            hours: [{
                day: 'Monday', hours: '9am - 5pm'
                }, {
                    day: 'Tuesday', hours: '9am - 5pm'
                }, {
                    day: 'Wednesday', hours: '9am - 5pm'
                }, {
                    day: 'Thursday', hours: '9am - 5pm'
                }, {
                    day: 'Friday', hours: '9am - 5pm'
                }, {
                    day: 'Saturday', hours: '9am - 5pm'
                }, {
                    day: 'Sunday', hours: '9am - 5pm'
                }],
            startingPrice: 0,
            promotion: false,
            promotionDescription: '',
        },
        {
            id: 2,
            nature: false,
            name: 'Spa Z',
            city: 'San Diego',
            state: 'CA',
            address: '1234 Main St',
            phone: '123-456-7890',
            website: 'www.spa.com',
            description: 'Asian Spa amazing',
            image: '/images/coldPlunge.jpg',
            services: ['Hot Tub', 'Spa'],
            rating: 3,
            visits: 10,
            hours: [{
                day: 'Monday', hours: '9am - 5pm'
                }, {
                    day: 'Tuesday', hours: '9am - 5pm'
                }, {
                    day: 'Wednesday', hours: '9am - 5pm'
                }, {
                    day: 'Thursday', hours: '9am - 5pm'
                }, {
                    day: 'Friday', hours: '9am - 5pm'
                }, {
                    day: 'Saturday', hours: '9am - 5pm'
                }, {
                    day: 'Sunday', hours: '9am - 5pm'
                }],
            startingPrice: 0,
            promotion: false,
            promotionDescription: '',
        },
        {
            id: 3,
            nature: false,
            name: 'Relax and Soak',
            city: 'Los Angeles',
            state: 'CA',
            address: '5678 Oak St',
            phone: '555-123-4567',
            website: 'www.relaxandsoak.com',
            description: 'A tranquil oasis in the heart of the city',
            image: '/images/relaxAndSoak.jpg',
            services: ['Hot Tub', 'Sauna'],
            rating: 4,
            visits: 250,
            hours: [
            { day: 'Monday', hours: '10am - 8pm' },
            { day: 'Tuesday', hours: '10am - 8pm' },
            { day: 'Wednesday', hours: '10am - 8pm' },
            { day: 'Thursday', hours: '10am - 8pm' },
            { day: 'Friday', hours: '10am - 10pm' },
            { day: 'Saturday', hours: '9am - 10pm' },
            { day: 'Sunday', hours: '9am - 8pm' }
            ],
            startingPrice: 25,
            promotion: false,
            promotionDescription: ''
        },
        {
            id: 4,
            nature: true,
            name: 'Mountain Oasis',
            city: 'Aspen',
            state: 'CO',
            address: '1234 Mountain Rd',
            phone: '555-234-5678',
            website: 'www.mountainoasis.com',
            description: 'Spectacular natural hot springs surrounded by mountain views',
            image: '/images/mountainOasis.jpg',
            services: ['Hot Spring'],
            rating: 5,
            visits: 500,
            hours: [
            { day: 'Monday', hours: '9am - 7pm' },
            { day: 'Tuesday', hours: '9am - 7pm' },
            { day: 'Wednesday', hours: '9am - 7pm' },
            { day: 'Thursday', hours: '9am - 7pm' },
            { day: 'Friday', hours: '9am - 10pm' },
            { day: 'Saturday', hours: '8am - 10pm' },
            { day: 'Sunday', hours: '8am - 7pm' }
            ],
            startingPrice: 50,
            promotion: true,
            promotionDescription: 'Spring into savings with our 20% off weekday promotion!'
        },
        {
            id: 5,
            nature: false,
            name: 'The Zen Den',
            city: 'San Francisco',
            state: 'CA',
            address: '4321 Pine St',
            phone: '555-345-6789',
            website: 'www.thezenden.com',
            description: 'Experience true relaxation with our range of spa services',
            image: '/images/theZenDen.jpg',
            services: ['Cold Plunge', 'Hot Tub'],
            rating: 4.5,
            visits: 1000,
            hours: [
            { day: 'Monday', hours: '11am - 8pm' },
            { day: 'Tuesday', hours: '11am - 8pm' },
            { day: 'Wednesday', hours: '11am - 8pm' },
            { day: 'Thursday', hours: '11am - 8pm' },
            { day: 'Friday', hours: '11am - 10pm' },
            { day: 'Saturday', hourshours: '8am - 10pm' },
            { day: 'Sunday', hours: '8am - 7pm' }
            ],
            startingPrice: 50,
            promotion: true,
            promotionDescription: 'Spring into savings with our 20% off weekday promotion!'
        },
        {
            id: 6,
            nature: false,
            name: 'Blissful Spa',
            city: 'San Francisco',
            state: 'CA',
            address: '456 Main St',
            phone: '555-987-6543',
            website: 'www.blissfulspa.com',
            description: 'Relaxing spa with a wide range of services',
            image: '/images/blissfulspa.jpg',
            services: ['Cold Plunge', 'Hot Tub', 'Steam Room', 'Sauna'],
            rating: 4.2,
            visits: 200,
            hours: [{
            day: 'Monday', hours: '10am - 8pm'
            }, {
            day: 'Tuesday', hours: '10am - 8pm'
            }, {
            day: 'Wednesday', hours: '10am - 8pm'
            }, {
            day: 'Thursday', hours: '10am - 8pm'
            }, {
            day: 'Friday', hours: '10am - 8pm'
            }, {
            day: 'Saturday', hours: '9am - 9pm'
            }, {
            day: 'Sunday', hours: '9am - 9pm'
            }],
            startingPrice: 50,
            promotion: true,
            promotionDescription: '50% off for first-time customers',
        },
        {
            id: 7,
            nature: true,
            name: 'Wilderness Oasis',
            city: 'Aspen',
            state: 'CO',
            address: '789 Main St',
            phone: '555-234-5678',
            website: 'www.wildernessoasis.com',
            description: 'Secluded natural hot springs surrounded by beautiful scenery',
            image: '/images/wildernessoasis.jpg',
            services: ['Hot Spring'],
            rating: 4.9,
            visits: 500,
            hours: [{
            day: 'Monday', hours: '9am - 6pm'
            }, {
            day: 'Tuesday', hours: '9am - 6pm'
            }, {
            day: 'Wednesday', hours: '9am - 6pm'
            }, {
            day: 'Thursday', hours: '9am - 6pm'
            }, {
            day: 'Friday', hours: '9am - 6pm'
            }, {
            day: 'Saturday', hours: '9am - 6pm'
            }, {
            day: 'Sunday', hours: '9am - 6pm'
            }],
            startingPrice: 30,
            promotion: true,
            promotionDescription: 'Free admission on your birthday',
        },
     ]

     return (
            <div className="w-screen h-full bg-white text-black">
                <div className="bg-slate-100 text-center py-2 font-bold">
                    Want to register your cold plunge/ sauna and make $? <span className="underline"> Learn More </span>
                </div>
                <div className="w-full">
                    <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex-shrink-0 flex items-center">
                                <Image src={logo} className="w-16 sm:w-12 px-2"/>  
                                <span className="font-black text-lg">TheYouuProject</span>
                            </div>
                            <div className="md:block border-2 rounded-full px-4 w-96 flex">
                                <div className="text-xs text-left font-black">Where</div>
                                <div className="text-center">Anywhere</div>
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
                            <Link href="/" className="block px-3 py-2 text-base font-medium bg-gray-900 rounded-md">Logout</Link>
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
                <div className="hidden md:block">
                    <div className="flex flex-wrap place-content-center text-center gap-5">
                        <div className="grid grid-cols-1 p-2">
                            <div className="px-2">🚀</div><div>View All</div>
                        </div>
                        <div className="grid grid-cols-1 p-2">
                            <div className="px-2">🔥</div><div>All Hot</div>
                        </div>
                        <div className="grid grid-cols-1 p-2">
                            <div className="px-2">🧊</div><div>All Cold</div>
                        </div>  
                        <div className="grid grid-cols-1 p-2">
                            <div className="px-2">🌺</div><div>In Nature</div>
                        </div>  
                        <div className="grid grid-cols-1 p-2">
                            <div className="px-2">‍‍🧖🏻‍♀️</div><div>Pro. Spa</div>
                        </div>
                        <div className="grid grid-cols-1 p-2">
                            <div className="px-2">❄️</div><div>Cryo</div>
                        </div>  
                        <div className="grid grid-cols-1 p-2">
                            <div className="px-2">🛀🏿</div><div>Ice Bath</div>
                        </div>  
                        <div className="grid grid-cols-1 p-2">
                            <div className="px-2">💨</div><div>Steam</div>
                        </div>  
                        <div className="grid grid-cols-1 p-2">
                            <div className="px-2">🥵</div><div>Sauna</div>
                        </div>  
                        <div className="grid grid-cols-1 p-2">
                            <div className="px-2">⛲</div><div>Hot Tub</div>
                        </div>
                        <div className="grid grid-cols-1 p-2">
                            <div className="px-2">⛩️</div><div>Hot Springs</div>
                        </div> 
                        <div className="grid grid-cols-1 p-2">
                            <div className="px-2">👻</div><div>Other</div>
                        </div>                         
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    {
                        coldHotdata.map((d) => {
                            return(
                                <div key={d.id} className="p-10 w-56">
                                    {
                                    d.nature 
                                        ? <NaturalHotColdCard data={d}/>
                                        : <NotNaturalHotColdCard data={d}/> 
                                        }
                                </div>
                            )
                        })

                    }                        
                </div>
            </div>
            )
    }

export default ColdHotFinder