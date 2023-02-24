'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Image from 'next/image'

import logo from '../../public/logo.png'

import { useUser } from "@/lib/hooks"

import TagList from '../components/taglist'
import QuickWins from '@/components/quickwins'
import MagicButton from '@/components/UI/magicButton'

export default function Home() {

  const [featured, setFeatured] = useState([
    { name: 'The Hard Reset', img: 'burntOutEmoji.png', desc: 'Sometimes in life we just need a reset. We have all been there, life is out of control and we are just burnt out...'},
    { name: 'Increase Alertness and Attention', img: 'AlertAndAttentiveEmoji.png', desc: 'Stay attentive and alert for longer'},
    { name: 'Cramming Session', img: 'studyingEmoji.png', desc: 'For when we need that extra boost to Cram a little harder - whether you are a student, interviewing for a job, have an upcoming test or need to perform specifically hard... '},
  ])

  const [content, setContent] = useState([
    { name: 'Increase Focus', img: 'icebathemoji.png', desc: 'Stay on track and be more engaged in any task and in life. Improve Clarity of Mind', tags: ['Motivation', 'Energy'] },
    { name: 'Suppliments and Stacks', img: 'suppliments.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
    { name: 'Boost Your Energy', img: 'energyEmoji.png', desc: 'Sometimes we just want a little more fuel in the day to keep our fire going', tags: ['Energy', 'Motivation'] },
    { name: 'Improve Your Mood', img: 'happyEmoji.png', desc: 'Stay on track and be more engaged in any task and in life. Improve Clarity of Mind', tags: ['Energy', 'Focus'] },
    { name: 'Master Your Mind', img: 'focusedEmoji.png', desc: 'Stay on track and be more engaged in any task and in life. Improve Clarity of Mind', tags: ['Mastery: Permanent Change', 'Focus'] },
    { name: 'Improve Brain Health', img: 'brainWorkout.png', desc: 'Boost mental performance, improve cognitive function, promote learning and memory', tags: ['Foods', 'Focus'] },
    { name: 'Reduce Anxiety', img: 'anxietyEmoji.png', desc: 'Relieve symptoms of depression and stress', tags: ['Foods', 'Focus'] },
    {name: 'Quick: Dopamine Boost', img: 'dopamineBoost.png', desc: 'Get a quick dopamine boost', tags: ['Suppliments and Stacks', 'Motivation'] },
    { name: 'Burn More Fat', img: 'burningFatEmoji.png', desc: 'Increase metabolism and burn more calories and help with weight loss and fatloss', tags: ['Suppliments and Stacks', 'Motivation'] },
    { name: 'Boost your Immune System', img: 'immuneSystemEmoji.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
    { name: 'Get Better at Sex', img: 'sexualHealthEmoji.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
    { name: 'Recover from a Workout', img: 'recovery.png', desc: 'Increase circulation and relieve muscle soreness', tags: ['Suppliments and Stacks', 'Motivation'] },
    { name: 'Improve Performance', img: 'performance.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
    { name: 'Fix Your Gut', img: 'guthealth.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
    { name: 'Prevent Burnout', img: 'preventBurnOut.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
    { name: 'Fix Your Diet', img: 'healthyFood.png', desc: '-', tags: ['Suppliments and Stacks', 'Motivation'] },
  ])

  const [selectedTag, setSelectedTag] = useState(null)
  const [selectedId, setSelectedId] = useState(null)
  const router = useRouter()

  const user = useUser()

  const handleTagClick = (tag) => {
    tag === selectedTag 
      ? setSelectedTag(null)
      : setSelectedTag(tag)
  }

  const handleSubmit = () => {
    router.push('/buyUsCoffee/checkOut')
  }

  const filteredContent = selectedTag
    ? content.filter((item) => item.tags.includes(selectedTag))
    : content


  return (
    <div>
      <div className="flex absolute top-2 sm:top-4 font-bold w-full px-8">
          <div className='grid grid-cols-1 text-center place-items-center'>
            <div className=''><Image src={logo} className="w-24"/></div>
            <div className='text-md sm:text-xl text-white'> TheYouuProject </div>
          </div>
          <div className='right-0 text-white ml-auto sm:mr-8 my-auto'>
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
                    <Link href="/signup">Sign-In/Up</Link>
                )
            }
          </div>
      </div>
      <main className='bg-youu-background flex items-center justify-center'>
        <div className="mt-36 sm:mt-44 px-10 py-8 sm:py-16 bg-white rounded-lg shadow-xl sm:mx-0 sm:px-16 bg-clip-padding backgroup-filter bg-opacity-10 border border-none min-h-screen" style={{ minWidth: "90%" }}>
          { !selectedId &&
            <>
              <div className='text-center text-white py-4 font-extrabold text-xl'> Start here if you're pumped and just want to start: </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-2 text-lg">    
                  <div className="py-4 px-6 rounded-3xl border-none bg-gradient-to-r from-youu-light-green to-youu-dark-green hover:from-youu-sky-pink hover:to-youu-sky-blue hover:font-extrabold cursor-pointer" onClick={() => { setSelectedId('quickwins'); }}>
                    <div>
                      <div className='font-bold'>Quick Wins</div>
                      <div>Shart here if you only have 15 mins or less</div>
                    </div>
                  </div>
                  <div className="py-4 px-6 rounded-3xl border-none bg-gradient-to-r from-youu-sky-blue to-youu-sky-pink hover:to-youu-deep-red hover:from-youu-light-pink hover:font-extrabold cursor-pointer" onClick={() => { setSelectedId('quickwins'); }}>
                    <div>
                      <div className='font-bold'>Building Blocks</div>
                      <div>These take a little longer, but lead to more meaningful changes</div>
                    </div>
                  </div>
                  <div className="py-4 px-6 rounded-3xl border-none bg-gradient-to-r from-youu-deep-red to-youu-light-pink hover:from-youu-light-green hover:to-youu-dark-green hover:font-extrabold cursor-pointer" onClick={() => { setSelectedId('quickwins'); }}>
                    <div>
                      <div className='font-bold'>Life Goals</div>
                      <div>Lets make these changes permanent</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {featured.map((item, index) => (
                    <div>
                      <div key={index} className="rounded-lg shadow">
                        <img src={`/images/${item.img}`} alt={item.name} className="w-full h-auto mt-4 rounded-lg" />
                      </div>
                      <div className='p-2 text-white text-sm'>
                        <div className='font-bold'>{item.name}</div>
                        <div className='font-thin'>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='text-center text-white py-4 font-extrabold text-xl'> Start here if you have something specific you want to work on: </div>
                <TagList
                  tags={['Suppliments and Stacks', 'Foods', 'Focus', 'Motivation', 'Energy', 'Mastery: Permanent Change']}
                  onTagClick={handleTagClick}
                />            
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {filteredContent.map((item, index) => (
                    <div>
                      <div key={index} className="rounded-lg shadow">
                        <img src={`/images/${item.img}`} alt={item.name} className="w-full h-auto mt-4 rounded-lg" />
                      </div>
                      <div className='p-2 text-white'>
                        <div className='font-bold'>{item.name}</div>
                        <div className='font-thin'>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
            </>
          }
          {
          selectedId === 'quickwins' &&
            <QuickWins  setSelectedId={setSelectedId}/>
          }
          </div>
      </main>
    </div>
  )
}
