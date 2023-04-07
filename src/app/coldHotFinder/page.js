'use client';

import { useUser } from "@/lib/hooks"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback  } from "react";

import { BsPinMapFill } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";

import logo from '../../../public/logo1.png'

import NaturalHotColdCard from "@/components/UI/hotColdCards/naturalHotColdCard";
import NotNaturalHotColdCard from "@/components/UI/hotColdCards/notNaturalHotColdCard";

import MapViewModal from "@/components/mapView/mapViewModal";

const ColdHotFinder = () => {
     const user = useUser()
     const [ mapView, setMapView ] = useState(false)
     const [ searchView, setSearchView ] = useState(false)
     const [ searchAddress, setSearchAddress ] = useState('')
     const [ serviceTypeFilter, setServiceTypeFilter ] = useState('')
     const [ filteredData, setFilteredData ] = useState([])

     const coldHotdata = [
        {
            id: 0,
            nature: false,
            name: 'Cold Plunge X',
            city: 'SanDiego',
            state: 'CA',
            address: '1234 Main St',
            phone: '123-456-7890',
            website: 'www.coldplungex.com',
            description: 'This is a description of the cold plunge',
            image: '/images/coldPlunge.jpg',
            services: ['Cold Plunge', 'Cold'],
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
            city: 'MammothLakes',
            state: 'CA',
            address: 'Hwy 395 Benton Crossing Rd',
            phone: '123-456-7890',
            website: 'www.willies.com',
            description: 'One of the most easily accessible natural hot springs in California',
            image: '/images/hotAndCold/nature/hotSpring/wildwilly.png',
            services: ['Hot Spring', 'Hot', 'Nature'],
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
            id: 4,
            nature: true,
            name: 'Mountain Oasis',
            city: 'Aspen',
            state: 'CO',
            address: '1234 Mountain Rd',
            phone: '555-234-5678',
            website: 'www.mountainoasis.com',
            description: 'Spectacular natural hot springs surrounded by mountain views',
            image: '/images/hotAndCold/nature/hotSpring/wildwilly.png',
            services: ['Hot Spring', 'Hot', 'Nature'],
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
            id: 2,
            nature: false,
            name: 'Spa Z',
            city: 'SanDiego',
            state: 'CA',
            address: '1234 Main St',
            phone: '123-456-7890',
            website: 'www.spa.com',
            description: 'Asian Spa amazing',
            image: '/images/coldPlunge.jpg',
            services: ['Hot Tub', 'Pro Spa', 'Hot'],
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
            city: 'LosAngeles',
            state: 'CA',
            address: '5678 Oak St',
            phone: '555-123-4567',
            website: 'www.relaxandsoak.com',
            description: 'A tranquil oasis in the heart of the city',
            image: '/images/relaxAndSoak.jpg',
            services: ['Hot Tub', 'Sauna', 'Hot'],
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
            id: 5,
            nature: false,
            name: 'The Zen Den',
            city: 'SanFrancisco',
            state: 'CA',
            address: '4321 Pine St',
            phone: '555-345-6789',
            website: 'www.thezenden.com',
            description: 'Experience true relaxation with our range of spa services',
            image: '/images/theZenDen.jpg',
            services: ['Cold Plunge', 'Hot Tub', 'Cold', 'Hot', 'Pro Spa'],
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
            city: 'SanFrancisco',
            state: 'CA',
            address: '456 Main St',
            phone: '555-987-6543',
            website: 'www.blissfulspa.com',
            description: 'Relaxing spa with a wide range of services',
            image: '/images/blissfulspa.jpg',
            services: ['Cold Plunge', 'Hot Tub', 'Steam Room', 'Sauna', 'Pro Spa', 'Hot', 'Cold'],
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
            image: '/images/hotAndCold/nature/hotSpring/wildwilly.png',
            services: ['Hot Spring', 'Hot', 'Nature'],
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

     const toggleMap = () => {
        setMapView(!mapView)
     }

     const toggleSearch = () => {
        setSearchView(!searchView)
     }

     const handleSearchAddress = (city) => {
        setSearchView(false)
        setSearchAddress(city)        
     }

     const handleClearSearchAddress = (event) => {
        event.stopPropagation()
        setSearchView(false)
        setSearchAddress('')        
     }

     const handleFilterSelection = useCallback((serviceType) => {
        setServiceTypeFilter(serviceType)
     }, [])

     useEffect(() => {
        let filteredData = coldHotdata
                                .filter((d) => !serviceTypeFilter || (serviceTypeFilter && d.services.includes(serviceTypeFilter)))
                                .filter((d) => !searchAddress || (searchAddress && d.city === searchAddress))
        setFilteredData(filteredData)
     }, [searchAddress, serviceTypeFilter])

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
                            <div className="relative">
                                <div className="md:block border-2 border-black rounded-full px-4 w-96 flex cursor-pointer" onClick={()=> toggleSearch()}>
                                    {
                                        searchAddress ?
                                            <div className="flex"><div className="p-2 text-center">{searchAddress}</div><div className="absolute right-0 py-2 px-4 rounded-full bg-black text-white hover:bg-white hover:text-black" onClick={(e)=>handleClearSearchAddress(e)}>X</div></div>
                                            :
                                            <div> 
                                                { searchView ? 
                                                    <div className="p-2">Select a City form the list below!</div>
                                                    : <div>
                                                        <div className="text-xs text-left font-black">Where</div>
                                                        <div className="text-center">Anywhere</div>
                                                    </div>
                                                }
                                            </div>
                                    }                                    
                                </div>
                                {
                                    searchView && 
                                        <div className="absolute left-0 mt-1 w-full bg-white shadow-lg rounded-md z-10 p-4">
                                            <div className="flex flex-col">
                                                <div className="p-2 rounded-full hover:bg-black hover:text-white cursor-pointer" onClick={()=>handleSearchAddress('NewYork')}>New York</div>
                                                <div className="p-2 rounded-full hover:bg-black hover:text-white cursor-pointer" onClick={()=>handleSearchAddress('SanDiego')}>San Diego</div>
                                                <div className="p-2 rounded-full hover:bg-black hover:text-white cursor-pointer" onClick={()=>handleSearchAddress('LosAngeles')}>Los Angeles</div>
                                                <div className="p-2 rounded-full hover:bg-black hover:text-white cursor-pointer" onClick={()=>handleSearchAddress('SanFransisco')}>San Francisco</div>
                                                <div className="p-2 rounded-full hover:bg-black hover:text-white cursor-pointer" onClick={()=>handleSearchAddress('Chicago')}>Chicago</div>
                                                <div className="p-2 rounded-full hover:bg-black hover:text-white cursor-pointer" onClick={()=>handleSearchAddress('Denver')}>Denver</div>
                                                <div className="p-2 rounded-full hover:bg-black hover:text-white cursor-pointer" onClick={()=>handleSearchAddress('Miami')}>Miami</div>
                                            </div>
                                        </div>
                                }
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
                        <div className={`grid grid-cols-1 p-3 rounded-full cursor-pointer ${serviceTypeFilter==='' ? 'bg-black text-white hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                            <div className="px-2" onClick={()=>handleFilterSelection('')}>🚀</div><div>View All</div>
                        </div>
                        <div className={`grid grid-cols-1 p-3 rounded-full cursor-pointer ${serviceTypeFilter==='Hot' ? 'bg-black text-white hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                            <div className="px-2" onClick={()=>handleFilterSelection('Hot')}>🔥</div><div>All Hot</div>
                        </div>
                        <div className={`grid grid-cols-1 p-3 rounded-full cursor-pointer ${serviceTypeFilter==='Cold' ? 'bg-black text-white hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                            <div className="px-2" onClick={()=>handleFilterSelection('Cold')}>🧊</div><div>All Cold</div>
                        </div>  
                        <div className={`grid grid-cols-1 p-3 rounded-full cursor-pointer ${serviceTypeFilter==='Nature' ? 'bg-black text-white hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                            <div className="px-2" onClick={()=>handleFilterSelection('Nature')}>🌺</div><div>In Nature</div>
                        </div>  
                        <div className={`grid grid-cols-1 p-3 rounded-full cursor-pointer ${serviceTypeFilter==='Pro Spa' ? 'bg-black text-white hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                            <div className="px-2" onClick={()=>handleFilterSelection('Pro Spa')}>‍‍🧖🏻‍♀️</div><div>Pro. Spa</div>
                        </div>
                        <div className={`grid grid-cols-1 p-3 rounded-full cursor-pointer ${serviceTypeFilter==='Cryo' ? 'bg-black text-white hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                            <div className="px-2" onClick={()=>handleFilterSelection('Cryo')}>❄️</div><div>Cryo</div>
                        </div>  
                        <div className={`grid grid-cols-1 p-3 rounded-full cursor-pointer ${serviceTypeFilter==='Ice Bath' ? 'bg-black text-white hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                            <div className="px-2" onClick={()=>handleFilterSelection('Ice Bath')}>🛀🏿</div><div>Ice Bath</div>
                        </div>  
                        <div className={`grid grid-cols-1 p-3 rounded-full cursor-pointer ${serviceTypeFilter==='Steam' ? 'bg-black text-white hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                            <div className="px-2" onClick={()=>handleFilterSelection('Steam')}>💨</div><div>Steam</div>
                        </div>  
                        <div className={`grid grid-cols-1 p-3 rounded-full cursor-pointer ${serviceTypeFilter==='Sauna' ? 'bg-black text-white hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                            <div className="px-2" onClick={()=>handleFilterSelection('Sauna')}>🥵</div><div>Sauna</div>
                        </div>  
                        <div className={`grid grid-cols-1 p-3 rounded-full cursor-pointer ${serviceTypeFilter==='Hot Tub' ? 'bg-black text-white hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                            <div className="px-2" onClick={()=>handleFilterSelection('Hot Tub')}>⛲</div><div>Hot Tub</div>
                        </div>
                        <div className={`grid grid-cols-1 p-3 rounded-full cursor-pointer ${serviceTypeFilter==='Hot Spring' ? 'bg-black text-white hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                            <div className="px-2" onClick={()=>handleFilterSelection('Hot Spring')}>⛩️</div><div>Hot Springs</div>
                        </div> 
                        <div className={`grid grid-cols-1 p-3 rounded-full cursor-pointer ${serviceTypeFilter==='Other' ? 'bg-black text-white hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'}`}>
                            <div className="px-2" onClick={()=>handleFilterSelection('Other')}>👻</div><div>Other</div>
                        </div>                         
                    </div>
                </div>
                { mapView ? 
                    <div>
                        <MapViewModal locations={filteredData}/>
                    </div>
                    :<div className="p-8 mb-20 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
                        {
                            filteredData
                                .map((d) => {
                                return(
                                        d.nature 
                                            ? <NaturalHotColdCard key={d.id} data={d}/>
                                            : <NotNaturalHotColdCard key={d.id} data={d}/>   
                                )
                            })
                        }                        
                    </div>
                }                
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10 p-3 bg-black rounded-full text-white font-black cursor-pointer hover:bg-white hover:text-black" onClick={() => toggleMap()}>
                    { mapView ? <div className="flex">Show List <div className="p-1 pl-2"><AiOutlineUnorderedList/></div></div> : <div className="flex">Show Map <div className="p-1 pl-2"><BsPinMapFill/></div></div> }
                </div>
            </div>
            )
    }
    
export default ColdHotFinder