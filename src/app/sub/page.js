'use client';

import { useRouter } from 'next/navigation'
import Link from "next/link"

import { useUser } from "@/lib/hooks"

import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import MagicButton from '@/components/UI/magicButton';

//import Profile from "./profile"

const BuyUsCoffee = () => {
    const router = useRouter()
    const user = useUser()

  
    const handleSubmit = () => {
      router.push('/buyUsCoffee/checkOut')
    }

    return(
      <div className="flex flex-col items-center justify-center text-white h-full p-4 md:py-16 md:px-32 bg-youu-dark-green">
        <div className="font-title pt-20 px-20 text-3xl md:text-4xl font-bold text-center pb-4 md:pb-8">
            Welcome to theYouuProject
        </div>
        <div className='px-10 py-6'>
            <div>I am MisterrPink (@misterrpink1),</div>
            <div>the solo coder and founder of theYouuProject</div>
            <div className='p-2'></div>
            <div>I built this project to make implementing Huberman, Rhonda Partick, Peter Attia, protocols easy.</div>
            <div className='p-2'></div>
            <div>The platform is free for now...</div>
            <div>But, you can own a LifeTime Member NOW!</div>
            <div>Pay anything you want.</div>
            <div>You will be supporting the project immensely</div>
            <div className='p-2'></div>
        </div>
        <div className='bg-youu-ucla-blue py-2 px-4 mx-auto flex place-items-center my-2 text-center place-content-center font-bold rounded-md'><Link href="https://buy.stripe.com/7sI28AazycZN8tWfYY">Become Lifetime Membership</Link></div>        
        <div className="text-base md:text-lg font-semibold mb-8 px-10 pt-4">
              <div>NEVER pay a subscription fee.</div>
              <div>💸 Free lifetime access</div>
              <div>🔑 Tokens</div>
              <div>🎁 Surprise gifts</div>
              <div>😋 And more</div>
              <div>You will forever be near and dear to me. Add I hope this is only the beginning of our friendship for years to come</div>
          </div>
        <div className='text-sm md:text-base text-youu-ucla-blue text-center'>
              Don't want to support us? 
              No problem, click below to go back home and start using the protocols for free!
        </div>
        <div className='flex justify-center mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link href='/'>Don't Help</Link>
        </div>        
    </div>
    )
}


export default BuyUsCoffee