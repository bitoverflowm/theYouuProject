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
          router.push('/sub')
        } else {
          throw new Error(await res.text())
        }
      } catch (error) {
        console.error('An unexpected error happened occurred:', error)
        setErrorMsg(error.message)
      }
    }
    return(
      <div className="h-screen my-auto flex flex-col items-center justify-center text-white bg-youu-dark-green p-20 sm:p-40 font-body">
        <div className="font-title text-4xl p-4">
          Better
        </div>
        <div className="font-title text-4xl p-4">
          Every
        </div>
        <div className="font-title text-4xl p-4">
          Day
        </div>
        <div className="mt-4">
          <SignupForm onSubmit={handleSubmit} />
        </div>
        <div className="text-lg font-light text-left p-4">
          <div className="text-sm py-2">
            Registering lets you
          </div>
          <ul className="text-xs sm:text-sm list-disc list-inside">
            <li className='py-1'>Track your progress</li>
            <li className='py-1'>Engage with the community</li>
            <li className='py-1'>Particiate in contests</li>
            <li className='py-1'>Vote on future builds, integrations, features</li>
            <li className='py-1'>Acess almost daily updates</li>
          </ul>
        </div>
      </div>
    )
}


export default SignUp