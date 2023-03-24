'use client';

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Transition } from '@headlessui/react';
import dynamic from 'next/dynamic';

import logo from '../../public/logo1.png'

import { useUser } from "@/lib/hooks"

import MagicButton from '@/components/UI/magicButton'
import Catalogue from '@/components/catalogue/catalogue';

const BackgroundVideo = dynamic(() => import('@/components/UI/backgroundVideo'), { ssr: false });

export default function Home() {
  const router = useRouter()
  const user = useUser()
  const mainContent = useRef()
  const aboutUs = useRef()

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [catalogueVisible, setCatalogueVisible] = useState(false)
  const [ textIndex, setTextIndex ] = useState(0)
  const [ selectedView, setSelectedView ] = useState('')
  const [ headingTextColor, setHeadingTextColor ] = useState('text-white')

  const textList = ['Unwavering Focus', 'More Motivation', 'Unparalleled Productivity', 'Improved Health']

  const handleSubmit = () => {
    router.push('/buyUsCoffee/checkOut')
  }

  const getNextIndex = () => {
    return (textIndex + 1) % textList.length
  }

  useEffect(()=> {
    const interval = setInterval(() => {
      setTextIndex(getNextIndex)
    }, 3000);
    return () => clearInterval(interval);
  }, [textIndex])

  const triggerViewActivation = (view) => {
    setSelectedView(view)
    if(view){
      setCatalogueVisible(true)
    }else{
      setCatalogueVisible(false)
    }
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

  return (
    <div>
      <div className="relative flex flex-row font-bold py-2 px-4 sm:px-24">
          <div className='ml-2 sm:ml-0 flex justify-start items-center w-1/2 cursor-pointer' onClick={()=> triggerViewActivation(false)}>
              <Image src={logo} className="w-16 sm:w-12"/>     
          </div>
             
          <div className='relative flex flex-wrap ml-auto sm:ml-auto text-white my-auto sm:w-auto'>
            <div className='text-center cursor-pointer px-6 p-1' onClick={()=> window.scrollTo({behavior: "smooth", top: aboutUs.current.offsetTop})}> About </div> 
            {
                user ? (
                    <div className='flex place-items-center flex-col sm:flex-row'>
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
          show={!catalogueVisible}
          enter="transition ease-out duration-300 transform"
          enterFrom='-translate-y-full'
          enterTo='translate-y-0'
          leave='trantion ease-in duration-300 transform'
          leaveFrom='translate-y-0'
          leaveTo='-translate-y-full'
          >
        <div className='relative h-screen overflow-hidden'>
            <div className='relative overflow-hidden h-screen'>
              <BackgroundVideo  setHeadingTextColor={setHeadingTextColor} isSmallScreen={isSmallScreen}/> 
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
                  <div>
                    Pick an attribute you would like to work on:
                  </div>
                  <div className='flex flex-wrap gap-1 place-content-center py-1 sm:py-5'>
                      <div className={`p-2 px-4 rounded-xl m-2 
                          ${selectedView === 'Researcher' 
                            ? 'bg-white text-black'
                            : 'bg-black text-white hover:bg-white hover:text-black cursor-pointer my-auto' 
                            } `} 
                          onClick={()=> triggerViewActivation('Researcher')}>
                        Focus
                      </div>
                      <div className={`p-2 px-4 rounded-xl m-2 
                          ${selectedView === 'Outcomes' 
                            ? ' bg-white text-black'
                            : 'bg-black text-white hover:bg-white hover:text-black cursor-pointer my-auto' 
                            } `} 
                          onClick={()=> triggerViewActivation('Outcomes')}>
                        Motivation
                      </div>
                      <div className={`p-2 px-4 rounded-xl m-2 
                          ${selectedView === 'Outcomes' 
                            ? ' bg-white text-black'
                            : 'bg-black text-white hover:bg-white hover:text-black cursor-pointer my-auto' 
                            } `} 
                          onClick={()=> triggerViewActivation('Outcomes')}>
                        Strength
                      </div>
                      <div className={`p-2 px-4 rounded-xl m-2 
                          ${selectedView === 'Outcomes' 
                            ? ' bg-white text-black'
                            : 'bg-black text-white hover:bg-white hover:text-black cursor-pointer my-auto' 
                            } `} 
                          onClick={()=> triggerViewActivation('Outcomes')}>
                        Health
                      </div>
                      <div className={`p-2 px-4 rounded-xl m-2 
                          ${selectedView === 'Outcomes' 
                            ? ' bg-white text-black'
                            : 'bg-black text-white hover:bg-white hover:text-black cursor-pointer my-auto' 
                            } `} 
                          onClick={()=> triggerViewActivation('Outcomes')}>
                        Anxiety
                      </div>
                      <div className={`p-2 px-4 rounded-xl m-2 
                          ${selectedView === 'Outcomes' 
                            ? ' bg-white text-black'
                            : 'bg-black text-white hover:bg-white hover:text-black cursor-pointer my-auto' 
                            } `} 
                          onClick={()=> triggerViewActivation('Outcomes')}>
                        Prevent Burnout
                      </div>
                  </div>
              </div>
              <div className={`${headingTextColor} text-center  font-extrabold mt-5`}>
                  Or:
              </div>                
              <div className='m-2 flex-col font-extrabold place-content-center text-center'>
                <div className='flex flex-row place-content-center'>
                  <div className={`p-2 px-4 rounded-xl m-2 ${selectedView === 'Researcher' ? 'bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer my-auto' } `} onClick={()=> triggerViewActivation('Researcher')}>
                      Learn The Science
                  </div>
                  <div className={`p-2 px-4 rounded-xl m-2 ${selectedView === 'Outcomes' ? ' bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer my-auto' } `} onClick={()=> triggerViewActivation('Outcomes')}>
                      Browse The Tools
                  </div>
                </div>
              </div>
            </div>           
          </div>            
        </div>
      </Transition>
      {
        <div className='p-8'>
          <div className='grid grid-cols-4 gap-2'>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                Find a Cold Plunge Near You
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                Find Hot Therapy Near You
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                Get All Your Micro Nutrients in One Go
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                Use Spotlighting to Get Focused
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                List Your Cold Plunge make $
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                Build the Perfect Workout for your Goals
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                The Suppliment Stack To Hit Ulitmate Focus
              </div>
            </div>
            <div className='rounded-xl border-2 border-white'>
              <div className='rounded-t-lg'>
                <img src='/images/AlertAndAttentiveEmoji.png' className='w-64 h-40 mx-auto rounded-t-lg'/>
              </div>
              <div className='bg-onyx-black text-white rounded-b-lg p-2 px-6 text-center'>
                Suppliment Stack For Ultimate Motivation
              </div>
            </div>
          </div>
        </div>
      }
      {!catalogueVisible &&
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
      }
      {catalogueVisible &&
      <div ref={mainContent}>
          <main className='bg-youu-background items-center justify-center w-screen'>
            <Catalogue selectedView={selectedView} setSelectedView={setSelectedView} catalogueVisible={catalogueVisible} triggerViewActivation={triggerViewActivation}/>       
          </main>
      </div>  
      }
    </div>
  )
}
