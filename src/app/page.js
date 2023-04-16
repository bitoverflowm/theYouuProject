'use client';

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Transition } from '@headlessui/react';
import dynamic from 'next/dynamic';

//import dbConnect from '@/lib/dbConnect';

import logo from '../../public/logo1.png'

import { useUser } from "@/lib/hooks"
import useIsClient from '@/lib/useIsClient';

import MagicButton from '@/components/UI/magicButton'
import FeaturedProtocols from '@/components/featuredProtocols/featuredProtocols';
import ProtocolFilter from '@/components/UI/filter/protocolFilter'; 

const BackgroundVideo = dynamic(() => import('@/components/UI/backgroundVideo'), { ssr: false });

export default function Home() {
  const router = useRouter()
  const user = useUser()
  const aboutUs = useRef()
  const isClient = useIsClient()

  const [ isSmallScreen, setIsSmallScreen ] = useState(false);
  const [ selectedView, setSelectedView ] = useState('')
  const [ headingTextColor, setHeadingTextColor ] = useState('text-white')
  const [ filter, setFilter ] = useState('All')
  const [ videoOn, setVideoOn ] = useState(true)

  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [protocolCatalogueData, setProtocolCatalogueData] = useState([])

  const handleSubmit = () => {
    router.push('/buyUsCoffee/checkOut')
  }

  const triggerBrowseFilter = (val) => {
    setFilter(val)
    setVideoOn(false)
  }

  const getFilterButtonClass = (val) => {
    const baseClasses = 'p-2 px-4 rounded-xl m-2'
    const selectedClasses = 'bg-white text-black'
    const unselectedClasses = 'bg-black text-white hover:bg-white hover:text-black cursor-pointer my-auto'
    return val === filter && !(videoOn) ? `${baseClasses} ${selectedClasses}` : `${baseClasses} ${unselectedClasses}`
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };
    mediaQuery.addEventListener('change', handleResize);
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  useEffect(() => {
    //fetchData()
    const firstFetch = async () => {
        try {
            const protocolCatalogue = fetchProtocolCatalogues(page, 10)
            const [protocolCatalogueData] = await Promise.all([protocolCatalogue])
            setProtocolCatalogueData(protocolCatalogueData.data)
            setPage((prevPage) => prevPage + 1)
        } catch (error) {
            console.log(error)
        }
    }
    
    firstFetch()     
    //const fireices = fetchFireIces()
    //const [fireIceData] = await Promise.all([fireices])

    //console.log('fireIceData', fireIceData)
  }, [])

  const fetchData = async() => {
    const protocolCatalogue = fetchProtocolCatalogues(page, 10)
    const [protocolCatalogueData] = await Promise.all([protocolCatalogue])
    if(protocolCatalogueData.data.length === 0){
        setHasMore(false)
    } else {
        //console.log(fireIceData)
        setProtocolCatalogueData((prevData) => [...prevData, ...protocolCatalogueData.data])
        setPage((prevPage) => prevPage + 1)
    }
    //console.log(fireIceData)
    //setFireIceData(fireIceData)
}



  return (
    <div>
      <div className="relative flex flex-row font-bold py-2 px-4 sm:px-24">
          <div className='ml-2 sm:ml-0 flex justify-start items-center w-1/2 cursor-pointer' onClick={()=> setVideoOn(true)}>
              <Image src={logo} className="w-16 sm:w-12" alt='logo'/>     
          </div>             
          <div className='relative flex flex-wrap ml-auto sm:ml-auto text-white my-auto sm:w-auto'>
            <div className='text-center cursor-pointer px-6 p-1' onClick={()=> window.scrollTo({behavior: "smooth", top: aboutUs.current.offsetTop})}> About </div> 
            {
                user ? (
                    <div className='flex gap-2 place-items-center flex-col sm:flex-row'>
                        <div>
                          <Link href="/dashboard" >Dashboard</Link>
                        </div>
                        <div className='text-xs sm:text-base'>
                            <Link href="/" as="/api/logout">Logout</Link>
                        </div>
                        <div className="p-1 pt-2 sm:p-4">
                          <MagicButton submitHandler={handleSubmit} label={'Gift Coffee ☕ or Pizza 🍕'}/>                            
                        </div>                                
                    </div>
                ) : (
                  <div className='text-xs bg-blue-600 p-2 rounded-md hover:bg-white hover:text-black'>
                    <Link href="/signup">Sign-In/Up</Link>
                  </div>
                )
            }
          </div>
      </div>
      {/*Jumbo/Hero Heading */}
      <Transition
          show={videoOn}
          enter="transition ease-out duration-300 transform"
          enterFrom='-translate-y-full'
          enterTo='translate-y-0'
          leave='trantion ease-in duration-300 transform'
          leaveFrom='translate-y-0'
          leaveTo='-translate-y-full'
          >
        <div className='relative h-screen overflow-hidden'>
            <div className='relative overflow-hidden h-screen'>
              <BackgroundVideo key={isClient} setHeadingTextColor={setHeadingTextColor} isSmallScreen={isSmallScreen} isClient={isClient}/>
              <div className='relative z-10 flex flex-col items-center justify-center h-full'>
                <div className='p-4'>
                  <div className={`${headingTextColor} text-center font-extrabold text-8xl`}>
                    The YOUU
                  </div>
                  <div className={`${headingTextColor} text-center font-extrabold text-8xl`}>
                    Project
                  </div>
                </div>
                <div className={`${headingTextColor} text-4xl`}>
                    Unlock Your Inner Beast
                </div>
                <div className={`text-black p-6 text-center mt-10 rounded-xl max-w-sm sm:max-w-3xl mx-auto bg-gradient-to-br from-nft-orange to-nft-orange-light`}>
                  <ProtocolFilter getFilterButtonClass={getFilterButtonClass} triggerBrowseFilter={triggerBrowseFilter}/>
                </div>
            </div>           
          </div>            
        </div>
      </Transition>
      {
        <div className='p-12'>
          {!(videoOn) && 
            <div className={`text-black p-6 text-center mt-10 rounded-xl max-w-sm sm:max-w-3xl mx-auto bg-gradient-to-br from-nft-purple to-nft-cotton`}>
                <ProtocolFilter getFilterButtonClass={getFilterButtonClass} triggerBrowseFilter={triggerBrowseFilter}/>
            </div>}
          <div className='py-6'>
            <FeaturedProtocols  protocolCatalogueData={protocolCatalogueData} fetchData={fetchData} hasMore={hasMore}  filter={filter}/>
          </div>
        </div>
      }
      <div className='mb-6'>
        {/* Sub description */}
        <div className='bg-white rounded-lg mx-10 mt-4 p-4 pt-8 sm:p-10 lg:px-32 bg-opacity-10 text-white' ref={aboutUs}>
          <div className='text-2xl font-extrabold text-center'>
            Welcome to TheYouuProject
          </div>
          <div className='font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-br from-nft-blue to-nft-purple text-xl'>
            <span className=" underline underline-offset-8 decoration-nft-orange decoration-4">simplicity is key</span> to science-backed health and wellness
          </div>
          <div className='pt-4 sm:py-4 lg:p-8 sm:grid sm:grid-cols-2'>
            <div className='px-2 text-justify'>
              <div className='p-2'>
                Our goal is to bring you the cutting-edge protocols and research from renown scientists like Dr. Andrew Huberman, Dr. Rhonda Patrick, Dr. David Sinclair, and many more.
              </div>
              <div className='p-2'>
                There is so much good science out there. But that's the problem. Information overload is a real thing...
              </div>
              <div className='p-2'>
                We barely have time for ourselves and our own work... How do we know what to do? How do we know what to focus on? How do we know what to prioritise?
              </div>
            </div>
            <div className='px-2 text-justify'>
                <div className='p-2'>
                  @theYouuProject we have done the hard work for you. We have taken the scientific nuggets of wisdom from the world's leading experts and distilled them into simple, easy to follow, actionable steps, games, procedures and protocols
                </div>
                <div className='p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-nft-blue to-nft-purple underline underline-offset-4 decoration-nft-orange decoration-4'>
                  We simplified the science and made it fun!
                </div>
                <div className='p-2'>
                With The Youu Project, you can now say goodbye to overwhelming information and hello to tangible results. Our platform offers a variety of bite-sized protocols, designed to help optimize your health and well-being. You can now easily access, implement and track the latest in science-backed health and wellness practices into your daily life.
                </div>
            </div>              
          </div>
        </div>
      </div>
    </div>
  )
}

export const fetchProtocolCatalogues = async (pageNumber = 1, itemsPerPage = 10) => {
  let url;

  if (process.env.NODE_ENV === 'development') {
      url = `http://localhost:3000/api/protocolCatalogue/?page=${pageNumber}&itemsPerPage=${itemsPerPage}`
  } else if (process.env.NODE_ENV === 'production') {
      url = `https://www.theyouuproject.com/api/protocolCatalogue/?page=${pageNumber}&itemsPerPage=${itemsPerPage}`
  }
  
  const res = await fetch(url)
  const protocolCatalogueData = await res.json()

  return  protocolCatalogueData;
}

/*export async function getServerSideProps(context) {
  try {
    const client = await dbConnect
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}*/
