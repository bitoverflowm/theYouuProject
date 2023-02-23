'use client';

import { useRouter } from 'next/navigation'
import Link from "next/link"

import { useUser } from "@/lib/hooks"

import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"

//import Profile from "./profile"

const BuyUsCoffee = () => {
    const router = useRouter()
    const user = useUser()

  
    async function handleSubmit(item) {
      alert(user.email)
    }

      // stripe payment integration
        // https://stripe.com/docs/payments/accept-a-payment?platform=web&ui=elements


    return(
      <div className="flex flex-col items-center justify-center text-white h-full p-8">
        <div className="text-lg font-light text-center p-4">
            Thank you 🙏 for signing up! Welcome to the community. WE ARE JUST GETTING STARTED. We are continually adding new features. You may notice many bugs, rest assured we are adding a user feedback service.</div> 
        <div className="text-lg font-light text-center p-4">
            In the mean time join our live coding sessions to provide live feedback: 
        </div>
         <Link href="https://www.youtube.com/watch?v=fw3IlzKWOdk"> <div className='flex items-center text-red-600 font-extrabold'><AiOutlineYoutube /> <div className='pl-2'>YouTube Live</div> </div> </Link>
         <div className="text-lg font-light text-center p-4">
            Or follow us and slide into our DMs: 
        </div>
         <Link href="https://www.instagram.com/theyouuproject_0_o/"> <div className='flex items-center'><AiOutlineInstagram /> <div className='pl-2'>@theyouuproject_0_o</div> </div></Link>
         <Link href="https://twitter.com/theyouuproject0"> <div className='flex items-center'><AiOutlineTwitter />  <div className='pl-2'>@theyouuproject0 </div></div></Link>
        <div className="text-lg font-light text-center p-4">
            Imagine a platform where you have an amazing community of individuals from all walks of life, striving to be better every day...
            We aim to be supportive, no matter what it is you are trying to achieve. So share that workout video you have been hesitating to post, share your 10second cold plunge experience, display 2 pack, 4 pack or 8 pack... or 24 pack 🍻
        </div>
        <div className="text-lg font-light text-center p-4">
          Now a little bit of housekeeping 👉 <span className='underline'>Our platform is free and we aim to keep it that way.</span> However, as developers, we always appreciate a ☕ coffee or a 🍕 pizza to help us sustain our work. If you gift us during our grind phase, we'll guarantee free lifetime access to all features, even if we start charging subscription fees in the future.
        </div>
        <div className="columns-1 items-center p-4">
          <div>
            <button className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md text-white font-bold py-4 px-8 mb-4 w-48" onClick={() => handleSubmit('coffee')}>
                Buy us a coffee ☕        
            </button>
          </div>
          <div>
            <button className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md text-white font-bold py-4 px-8 mb-4 w-48" onClick={() => handleSubmit('pizza')}>
                Buy us a pizza 🍕
            </button>
          </div>
        </div>
        
        <div className="font-medium underline underline-offset-4 text-center p-4">
          Gift us ☕🍕 and get access to surprise free gifts 🎁🎁 we'll be rolling out over the next few weeks/months!
        </div>
      </div>
    )
}


export default BuyUsCoffee