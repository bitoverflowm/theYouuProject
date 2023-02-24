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
      <div className="flex flex-col items-center justify-center text-white h-full p-4 md:py-16 md:px-32">
        <div className="text-3xl md:text-4xl font-bold text-center pb-4 md:pb-8">
            Thanks for joining TheYouuProject, { user && user.email }! 🙏
        </div>
        <div className="text-sm md:text-base text-purple-300 text-center mb-4 md:mb-8">
            Welcome to the family! We're just getting started and always adding exciting new features. If you run into any issues, just reach out to us 👇
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-indigo-500 border rounded-lg pt-8 md:pt-4 mb-4 place-content-center p-8 overflow-visible">
          <div className="text-sm md:text-base text-black text-center mb-4 md:mb-8">
              A little bit of housekeeping 👇 <span className='underline'>Our platform is free and we aim to keep it that way.</span> However, we always appreciate a ☕ coffee or a 🍕 pizza to keep us going. If you gift us during our grind phase, we guarantee free lifetime access to all features, even if we start charging subscription fees in the future.
          </div>
          <div className="flex place-content-center mb-8">
            <MagicButton label={'Gift Us Coffee ☕ or Pizza 🍕'} submitHandler={handleSubmit} color={'pink'}/>
          </div>        
          <div className="text-base md:text-lg font-semibold text-center mb-8">
              Get:
              <div>💸 Free lifetime access</div>
              <div>🔑 Tokens</div>
              <div>🎁 Surprise gifts</div>
              <div>😋 And more</div>
          </div>
        </div>
        <div className='place-items-center pb-4 md:pb-8'>
          <div className="text-2xl md:text-3xl font-semibold text-center pb-4 md:pb-2">
              Join us for live coding sessions:
          </div>
          <Link href="https://www.youtube.com/watch?v=fw3IlzKWOdk">
              <div className='flex place-content-center text-red-600 font-extrabold'>
                  <div className='pt-1'><AiOutlineYoutube /></div>
                  <div className='pl-2'>YouTube Live</div>
              </div>
          </Link>          
          <div className="text-2xl md:text-3xl font-semibold text-center pb-4 md:pb-2">
              Or connect with us on social media: 
          </div>
          <div className='flex flex-col items-center space-y-4 md:space-y-4'>
              <Link href="https://www.instagram.com/theyouuproject_0_o/">
                  <div className='flex place-content-center'>
                      <div className='my-auto'><AiOutlineInstagram /></div>
                      <div className='pl-2'>@theyouuproject_0_o</div>
                  </div>
              </Link>
              <Link href="https://twitter.com/theyouuproject0">
                  <div className='flex place-content-center'>
                      <div className='my-auto'><AiOutlineTwitter /></div> 
                      <div className='pl-2'>@theyouuproject0</div>
                  </div>
              </Link>
          </div>
        </div> 
        <div className="text-base md:text-lg text-purple-300 text-center mb-4 md:mb-8">
            TheYouuProject is not just a platform, we're a supportive community of developers, indie hackers, entrepreneurs, and more, from all walks of life, taking baby steps to be better and get healthier every day...
        </div>
        <div className="text-sm md:text-base text-purple-300 text-center mb-2">
            Our goal is to be compassionate and supportive, no matter what you're trying to achieve. 
            <div className='pl-4 py-1'>🏋🏿‍♂️ Share that workout video you've been hesitating to post</div>
            <div className='pl-4 py-1'>🥶 Share your first 10-second cold plunge experience</div>
            <div className='pl-4 py-1'>🦍 Show off your abs (2-pack, 4-pack, 8-pack, or 24-pack 🍻)</div>
            <div className='pl-4 py-1'>💚 We're a judgement-free zone.</div>
            <div className='pl-4 py-1'>Tag us with #theYouuProject and we'd love to see your progress!</div>
        </div>
        <div className='text-sm md:text-base text-purple-300 text-center'>
              Don't want to gift us? No problem, click below to go back home and start using the protocols for free!
        </div>
        <div className='flex justify-center mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            <Link href='/'>Back Home</Link>
        </div>        
    </div>
    )
}


export default BuyUsCoffee