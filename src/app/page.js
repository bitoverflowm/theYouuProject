'use client';

import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


import Image from 'next/image'
import { Transition } from '@headlessui/react';

import logo from '../../public/logo.png'

import { useUser } from "@/lib/hooks"

import MagicButton from '@/components/UI/magicButton'
import Catalogue from '@/components/catalogue/catalogue';

export default function Home() {
  const router = useRouter()
  const user = useUser()
  const mainContent = useRef()
  const aboutUs = useRef()

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
    if(view){
      setCatalogueVisible(true)
    }else{
      setCatalogueVisible(false)
    }
  }

  return (
    <div>
      <div className="relative top-2 sm:top-4 flex flex-row font-bold px-4 sm:px-24">
          <div className='ml-14 sm:ml-0 flex justify-start items-center w-1/2 cursor-pointer' onClick={()=> triggerViewActivation(false)}>
              <Image src={logo} className="w-16 sm:w-12"/>
              <div className='text-base sm:text-sm text-white my-auto sm:ml-2'> TheYouuProject </div>            
          </div>
          <div className='relative sm:ml-auto text-white my-auto sm:w-auto'>
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
      <Transition
          show={!catalogueVisible}
          enter="transition ease-out duration-300 transform"
          enterFrom='-translate-y-full'
          enterTo='translate-y-0'
          leave='trantion ease-in duration-300 transform'
          leaveFrom='translate-y-0'
          leaveTo='-translate-y-full'
          >
        <div className='mt-6 sm:mt-8 bg-white py-10 sm:px-32 sm:pt-28 sm:pb-20 2xl:px-64'>
          <div className='grid grid-cols-1 sm:grid-cols-2 '>
            <div className='my-auto'>
              <div className='text-center text-4xl sm:text-left font-extrabold sm:text-5xl lg:text-7xl xl:text-8xl'>
                Science Simplified
              </div>
              <div className='flex font-bold text-gray-800 place-content-center sm:place-content-start'>
                <div key={textIndex} className="text-center sm:text-left py-2 text-3xl lg:text-3xl xl:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-nft-sky to-nft-orange font-extrabold">
                  {textList[textIndex]}
                </div>
              </div>
              <div className='flex flex-wrap place-content-center sm:place-content-start text-base text-sm xl:text-lg text-gray-600 mt-2 max-w-3xl px-4 pb-5 sm:p-0'>
                <div className='font-extrabold hover:font-extrabolder hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-nft-blue hover:to-nft-purple hover:underline hover:underline-offset-4 hover:decoration-nft-orange hover:decoration-4 cursor-pointer px-1'>😃 Master Your Mood</div>
                <div className='font-extrabold hover:font-extrabolder hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-nft-blue hover:to-nft-purple hover:underline hover:underline-offset-4 hover:decoration-nft-orange hover:decoration-4 cursor-pointer px-1'>🧠 Enhance Brain Health</div>
                <div className='font-extrabold hover:font-extrabolder hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-nft-blue hover:to-nft-purple hover:underline hover:underline-offset-4 hover:decoration-nft-orange hover:decoration-4 cursor-pointer px-1'>🍎 Improve Gut Health</div>
                <div className='font-extrabold hover:font-extrabolder hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-nft-blue hover:to-nft-purple hover:underline hover:underline-offset-4 hover:decoration-nft-orange hover:decoration-4 cursor-pointer px-1'>🚀 Boost Energy Levels</div>
                <div className='font-extrabold hover:font-extrabolder hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-nft-blue hover:to-nft-purple hover:underline hover:underline-offset-4 hover:decoration-nft-orange hover:decoration-4 cursor-pointer px-1'>🏋️ Build the Perfect Workout Routine</div>
              </div>
            </div>
            <div className='m-auto w-72 sm:max-w-sm'>
              <img src={`/images/brainWorkout.png`} alt={'brainworkout'} className="rounded-lg" />
            </div>
          </div>        
          <div className='mt-10 sm:mt-20 text-sm lg:text-base rounded-xl max-w-sm sm:max-w-3xl mx-auto bg-gradient-to-br from-nft-orange to-nft-orange-light py-3'>
            <div className='text-center  font-extrabold text-black'>
                Browse By:
            </div>
            <div className='m-2 flex-col font-extrabold place-content-center text-center'>
              <div className='grid grid-cols-2 sm:flex sm:flex-row place-content-center'>
                <div className={`p-2 px-4 rounded-xl m-2 ${selectedView === 'Researcher' ? 'bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer' } `} onClick={()=> triggerViewActivation('Researcher')}>
                    The Science
                </div>
                <div className={`p-2 px-4 rounded-xl m-2 ${selectedView === 'Outcomes' ? ' bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer' } `} onClick={()=> triggerViewActivation('Outcomes')}>
                    Specific Outcomes
                </div>
                <div className={`p-2 px-4 rounded-xl m-2 ${selectedView === 'Tools' ? ' bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer' } `} onClick={()=> triggerViewActivation('Tools')}>
                      less than 1 minute
                </div>
                <div className={`p-2 px-4 rounded-xl m-2 ${selectedView === 'Tools' ? ' bg-white text-black': 'bg-black text-white hover:bg-white hover:text-black cursor-pointer' } `} onClick={()=> triggerViewActivation('Tools')}>
                      less than 15 minutes
                </div>
              </div>
            </div>
          </div>
          <div className='text-center pt-5 sm:pt-10 cursor-pointer' onClick={()=> window.scrollTo({behavior: "smooth", top: aboutUs.current.offsetTop})}>
            <div>
              Learn More
            </div>
            <div>
              ⬇️
            </div>          
          </div>          
        </div>
      </Transition>
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
      <div ref={mainContent}>
          <main className='bg-youu-background items-center justify-center w-screen'>
            <Catalogue selectedView={selectedView} setSelectedView={setSelectedView} catalogueVisible={catalogueVisible} triggerViewActivation={triggerViewActivation}/>       
          </main>
      </div>  
    </div>
  )
}
