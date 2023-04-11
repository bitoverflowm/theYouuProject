
import { useState } from "react"
import Link from "next/link"
import useIsClient from "@/lib/useIsClient"

import MovingVideoCard from "../UI/Cards/movingVideoCard"

const FeaturedProtocols = () => {
    const isClient = useIsClient()
    
    const [protocols] = useState([
        { id: 0, label: 'cold', video: '/video/small/cold0.mp4', desc: 'Find a Cold Plunge Near You', link: '/coldHotFinder', saves: 100, shareLink: '', shares: 15, tags: ['Focus', 'Motivation', 'Health', 'Anxiety', 'Prevent Burnout']},
        { id: 1, label: 'cold', video: '/video/small/cold0.mp4', desc: 'Find a Cold Plunge Near You', link: '/coldHotFinder', saves: 100, shareLink: '', shares: 15, tags: ['Focus', 'Motivation', 'Health', 'Anxiety', 'Prevent Burnout']}
        //{ id: 'hot', video: '/videos/small/hot1.mp4'}
    ])
    

    return (
        <div className="flex flex-wrap gap-6">
            {
                protocols.map((p) => {
                    return(
                        <div className="cursor-pointer w-96 h-96" key={p.id + 'featuredProtocols'}>
                            <Link href={p.link}>
                                <div className="rounded-lg">
                                    {isClient && <MovingVideoCard videoUrl={p.video} />}
                                </div>
                                <div>
                                    {p.desc}
                                </div>
                            </Link>
                            <div className="flex">
                                {p.saves} {p.shares}
                            </div>
                        </div>
                        )
                })
            }
        </div>
        

        /*
        <div className='grid grid-cols-4 gap-2'>
            <div className='cursor-pointer'>
              <div className='rounded-t-lg'>
                <MovingVideoCard videoUrl={videos[0].video} />
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
          </div>*/
    )
}

export default FeaturedProtocols
