'use client';

import { useRouter } from 'next/navigation'
import Link from "next/link"

import { useUser } from '@/lib/hooks'
import { Magic } from 'magic-sdk'

//import Profile from "./profile"
import SignupForm from "@/components/authForms/signupForm"

const SignUp = () => {
    const router = useRouter()
    useUser({ redirectTo: '/', redirectIfFound: true })

  
    async function handleSubmit(e) {
      e.preventDefault()  
  
      const body = {
        email: e.currentTarget.email.value,
      }
  
      try {
        const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY)
        const didToken = await magic.auth.loginWithMagicLink({
          email: body.email,
        })
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + didToken,
          },
          body: JSON.stringify(body),
        })
        if (res.status === 200) {
          router.push('/buyUsCoffee')
        } else {
          throw new Error(await res.text())
        }
      } catch (error) {
        console.error('An unexpected error happened occurred:', error)
        setErrorMsg(error.message)
      }
    }


    /*return (
      <div class="flex flex-col items-center justify-center">
        <div class="text-xl font-light text-center p-1">
          Let's sign you in. 
          <div>Remember theYouuProject is all about You. And fostering a community of supportive inviduals. We are free and will do our best to stay free, forever.</div> But devs always appreciate a <div class="font-medium underline underline-offset-4"> ☕ coffee or a 🍕 pizza</div>
          <div>If you do end up gifting us ☕🍕 now, during our grind phase. We will guarantee free lifetime access to our features, forever in perpetuity. If it comes to the point in the future that we need to start charging subscription fees to keep the lights on 🥰</div>
          <div>And get access to some surprise free gifts that we will be rolling out over the next few weeks/ months</div>
        </div>
        <div class="mt-4">
          <SignupForm onSubmit={handleSubmit} />
        </div>
        <div className='text-xl font-light text-left p-1'>
          <div className='p-1'>
            We are just getting started
            and we are continually adding new features. By signing up you can:
          </div>
          <div  className='p-1'>
            ❤️ track progress
          </div>
          <div  className='p-1'>
            🔥 collect tokens
          </div>
          <div  className='p-1'>
            🚀 use tokens to vote on future integrations, features and scientific protocols to dissect and internalize in the system
          </div>
          <div className='p-1'>
            🦄 get access to the community. We will be launching a discord, facebook group, or maybe native social sharing channel that lets us update progress pics, share improvements in our performance, whatever it may be. We strive to create an encouraging inclusive community where we are comfortable being our weird selves. Striving to be better every day.
          </div>        
        </div>
      </div>
    )*/
    return(
      <div className="flex flex-col items-center justify-center text-white h-full p-8">
        <div className="text-xl font-light text-center p-4">
          Let's sign you in.
        </div>
        <div className="mt-4">
          <SignupForm onSubmit={handleSubmit} />
        </div>
        <div className="text-lg font-light text-left p-4">
          <div className="pb-2">
            We are just getting started and will continue to add new features. By signing up, you can:
          </div>
          <ul className="list-disc list-inside">
            <li>Track your progress ❤️</li>
            <li>Collect tokens 🔥</li>
            <li>Use tokens to vote on future integrations, features, and scientific protocols 🚀</li>
            <li>Join our community and connect with other like-minded individuals 🦄</li>
            <li>Much more, but we just haven't gotton around to fguring it all out yet 😎 </li>
          </ul>
        </div>
      </div>
    )
}


export default SignUp