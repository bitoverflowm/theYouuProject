'use client';

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


import Image from 'next/image'

import logo from '../../public/logo.png'

import { useUser } from "@/lib/hooks"

import MagicButton from '@/components/UI/magicButton'
import Catalogue from '@/components/catalogue/catalogue';

export default function Home() {
  const router = useRouter()
  const user = useUser()
  const mainContent = useRef()

  const [catalogueVisible, setCatalogueVisible] = useState(false)
  const [ textIndex, setTextIndex ] = useState(0)
  const [ selectedView, setSelectedView ] = useState('')

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
    setCatalogueVisible(true)
    window.scrollTo({
      behavior: "smooth",
      top: mainContent.current.offsetTop
    });
  }

  return (
    <div>
      <div className="flex relative top-2 sm:top-4 font-bold w-full px-8">
          <div className='grid grid-cols-1 text-center place-items-center'>
            <div className=''><Image src={logo} className="w-12"/></div>
            <div className='text-base sm:text-sm text-white'> TheYouuProject </div>
          </div>
          <div className='right-0 text-white ml-auto my-auto'>
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
                  <div className='text-xs'>
                    <Link href="/signup">Sign-In/Up</Link>
                  </div>
                )
            }
          </div>
      </div>
      {/*Jumbo/Hero Heading */}
      <div className='mt-8 bg-white px-32 sm:pt-28 sm:pb-20 2xl:px-64'>
        <div className='grid grid-cols-2'>
          <div className='my-auto'>
            <div className='font-extrabold text-8xl'>
              Science Simplified
            </div>
            <div className='flex font-bold text-6xl text-gray-800'>
              <div key={textIndex} className="py-2 text-4xl text-transparent bg-clip-text bg-gradient-to-br from-nft-sky to-nft-orange font-extrabold">
                {textList[textIndex]}
            </div>
            </div>
            <div className='flex flex-wrap text-lg text-gray-600 mt-2 max-w-3xl'>
              <div className='font-extrabold hover:font-extrabolder hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-nft-blue hover:to-nft-purple hover:underline hover:underline-offset-4 hover:decoration-nft-orange hover:decoration-4 cursor-pointer px-1'>😃 Master Your Mood</div>
              <div className='font-extrabold hover:font-extrabolder hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-nft-blue hover:to-nft-purple hover:underline hover:underline-offset-4 hover:decoration-nft-orange hover:decoration-4 cursor-pointer px-1'>🧠 Enhance Brain Health</div>
              <div className='font-extrabold hover:font-extrabolder hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-nft-blue hover:to-nft-purple hover:underline hover:underline-offset-4 hover:decoration-nft-orange hover:decoration-4 cursor-pointer px-1'>🍎 Improve Gut Health</div>
              <div className='font-extrabold hover:font-extrabolder hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-nft-blue hover:to-nft-purple hover:underline hover:underline-offset-4 hover:decoration-nft-orange hover:decoration-4 cursor-pointer px-1'>🚀 Boost Energy Levels</div>
              <div className='font-extrabold hover:font-extrabolder hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-nft-blue hover:to-nft-purple hover:underline hover:underline-offset-4 hover:decoration-nft-orange hover:decoration-4 cursor-pointer px-1'>🏋️ Build the Perfect Workout Routine</div>
            </div>
          </div>
          <div className='m-auto max-w-sm'>
            <img src={`/images/brainWorkout.png`} alt={'brainworkout'} className="rounded-lg" />
          </div>
        </div>        
        <div className='mt-20 rounded-xl max-w-3xl mx-auto bg-gradient-to-br from-nft-orange to-nft-orange-light py-3'>
          <div className='text-center text-xl font-extrabold text-black'>
               Browse For <span className='underline'>Free</span> By:
          </div>
          <div className='m-2 flex-col font-extrabold place-content-center'>
            <div className='flex place-content-center'>
              <div className={`p-2 rounded-xl m-2 ${selectedView === 'Researcher' ? 'bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer' } `} onClick={()=> triggerViewActivation('Researcher')}>
                  The Science
              </div>
              <div className={`p-2 rounded-xl m-2 ${selectedView === 'Outcomes' ? ' bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer' } `} onClick={()=> triggerViewActivation('Outcomes')}>
                  Specific Outcomes
              </div>
              <div className={`p-2 rounded-xl m-2 ${selectedView === 'Tools' ? ' bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer' } `} onClick={()=> triggerViewActivation('Tools')}>
                    less than 1 minute
              </div>
              <div className={`p-2 rounded-xl m-2 ${selectedView === 'Tools' ? ' bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer' } `} onClick={()=> triggerViewActivation('Tools')}>
                    less than 15 minutes
              </div>
            </div>
          </div>
        </div>
      </div>
      {!catalogueVisible &&
        <div className='mb-6'>
          {/* Sub description */}
          
          <div className='bg-white rounded-lg mx-10 mt-4 p-10 px-32 bg-opacity-10 text-white'>
            <div className='text-xl font-extrabold text-center'>
              Welcome to TheYouuProject ...
            </div>
            <div className='text-center'>
              where simplicity is key to science-backed health and wellness
            </div>
            <div className='p-10 grid grid-cols-2'>
              <div className='px-10'>
                <div className='p-2'>
                  Our goal is to bring you the cutting-edge protocols and research from renown scientists like Dr. Andrew Huberman, Dr. Rhonda Patrick, Dr. David Sinclair, and many more.
                </div>
                <div className='p-2'>
                  There is so much good science out there. But thats the problem. Information overload is a real thing...
                </div>
                <div className='p-2'>
                  We barely have time for ourselves and our own work... How do we know what to do? How do we know what to focus on? How do we know what to prioritise?
                </div>
              </div>
              <div className='px-10'>
                  <div className='p-2'>
                    @theYouuProject we have done the hard work for you. We have taken the scientific nuggets of wisdom from the world's leading experts and distilled them into simple, easy to follow, actionable steps.
                  </div>
                  <div className='p-2'>
                  With The Youu Project, you can now say goodbye to overwhelming information and hello to tangible results. Our platform offers a variety of bite-sized protocols, designed to help optimize your health and well-being. You can now easily access and implement and track the latest in science-backed health and wellness practices into your daily life.
                  </div>
              </div>              
            </div>
          </div>
        </div>
      }
      <div ref={mainContent}>
      {catalogueVisible &&
        <main className='bg-youu-background flex items-center justify-center w-screen'>
          <Catalogue selectedView={selectedView} setSelectedView={setSelectedView}/>       
        </main>
      }
      </div>  
    </div>
  )
}
