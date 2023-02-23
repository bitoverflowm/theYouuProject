'use client';

import { useRouter } from 'next/navigation'
import Link from "next/link"

import { useUser } from "@/lib/hooks"

import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

//import Profile from "./profile"

const BuyUsCoffee = () => {
    const router = useRouter()
    const user = useUser()

  
    const handleSubmit = () => {
      router.push('/buyUsCoffee/checkout')
    }

    return(
      <div className="flex flex-col items-center justify-center text-white h-full p-8">
        <div className="text-lg text-center p-4">
            Thank you  for signing up {user.email}! 🙏
        </div>
        <div>
          Welcome to the family. WE ARE JUST GETTING STARTED. We are continually adding new features. You may notice many bugs, rest assured we are adding a user feedback service.
        </div>
        <div className='place-items-center p-2 pb-2'>
          <div className="text-lg font-light text-center p-4">
              In the mean time join our live coding sessions to provide live feedback:
          </div>
          <Link href="https://www.youtube.com/watch?v=fw3IlzKWOdk"> <div className='flex place-content-center text-red-600 font-extrabold'><div className='pt-1'><AiOutlineYoutube /></div> <div className='pl-2'>YouTube Live</div> </div> </Link>
          
          <div className="text-lg font-light text-center p-4">
              Or follow us and slide into our DMs: 
          </div>
          <Link href="https://www.instagram.com/theyouuproject_0_o/"> <div className='flex place-content-center'><div className='pt-1'><AiOutlineInstagram /></div> <div className='pl-2'>@theyouuproject_0_o</div> </div></Link>
          <Link href="https://twitter.com/theyouuproject0"> <div className='flex place-content-center'><div className='pt-1'><AiOutlineTwitter /></div>  <div className='pl-2'>@theyouuproject0 </div></div></Link>
        </div> 
        <div>
            TheYouuProject is not just a platform. We are an amazing community of developers, indie hackers, entrepreneurs, friends, employees, day workers, night shift workes, unemployeed people, from all walks of life, taking the baby steps to be better and get healthier every day...
        </div>
        <div className=" pt-2">
            Our goal is to be compassionate and supportive, no matter what you are trying to achieve. 
            <div className='pl-4 py-1'>🏋🏿‍♂️ So share that workout video you have been hesitating to post. </div>
            <div className='pl-4 py-1'>🥶 Share your first 10 sec cold plunge experience.</div>
            <div className='pl-4 py-1'>🦍 Show off your 2 pack, 4 pack or 8 pack... or 24 pack 🍻 </div>
            <div className='pl-4 py-1'>💚 We are a judgement free zone.</div>
        </div>
        <div className="py-4">
          <div>Now a little bit of housekeeping 👇</div> <span className='underline'>Our platform is free and we aim to keep it that way.</span> However, we always appreciate a ☕ coffee or a 🍕 pizza to keep us going. If you gift us during our grind phase, we'll guarantee free lifetime access to all features, even if we start charging subscription fees in the future.
        </div>
        <div className="columns-1 items-center p-4">
          <div>
            <button className="bg-green-500 bg-opacity-80 hover:bg-opacity-80 rounded-md text-white font-bold py-4 px-8 mb-4 w-52" onClick={() => handleSubmit()}>
                Buy us a coffee ☕ or a pizza 🍕
            </button>
          </div>
        </div>        
        <div className="font-medium underline underline-offset-4 text-center p-4">
          Gift us ☕🍕 and get free lifetime access to the platform and surprise gifts 🎁🎁 over the next few weeks/months!
        </div>
      </div>
    )
}


export default BuyUsCoffee