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
    return(
      <div className="h-screen my-auto flex flex-col items-center justify-center text-white p-20 sm:p-40">
        <div className="text-xl font-light text-center p-4">
          Welcome! Let's get started.
        </div>
        <div className="mt-4">
          <SignupForm onSubmit={handleSubmit} />
        </div>
        <div className="text-lg font-light text-left p-4">
          <div className="pb-2">
            Our platform is constantly growing and evolving. By signing up, you'll get access to exciting features such as:
          </div>
          <ul className="text-xs sm:text-sm list-disc list-inside">
            <li>Track your progress 📈</li>
            <li>Collect tokens to unlock rewards 🔑</li>
            <li>Vote on future integrations, features, and scientific protocols 🚀</li>
            <li>Join our community and connect with like-minded individuals 🌟</li>
            <li>Plus many more exciting updates on the way! 😎</li>
          </ul>
        </div>
      </div>
    )
}


export default SignUp