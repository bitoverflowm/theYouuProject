
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

//import { useUser } from "@/lib/hooks"

import MagicButton from '@/components/UI/magicButton'
import MainContentParent from '@/components/mainContentParent/mainContentParent';


export default async function Home() {


  return (
    <div className='w-full'>
      <div className="relative flex flex-row font-bold py-2 px-4 sm:px-24 bg-youu-red">
          <div className='ml-2 sm:ml-0 flex justify-start items-center w-1/2 cursor-pointer text-white'>
              <Link href='/blog'>TheYouuProject</Link>
          </div>             
          <div className='relative flex flex-wrap ml-auto sm:ml-auto text-white my-auto sm:w-auto place-items-center'>
            <div className='text-xs text-center cursor-pointer px-6 p-1'> About </div>
              <div className='flex gap-3'>
                <div className='cursor-pointer text-black text-xs p-2 px-4 bg-white rounded-md hover:bg-black hover:text-white font-black'>
                  <Link href="/signup">Join</Link>
                </div>
                <div className='cursor-pointer text-xs p-2 hover:underline hover:text-black font-black'>
                  <Link href="/signup">Sign-In/Up</Link>
                </div>
              </div>
          </div>
      </div>
      <div className='relative h-screen overflow-hidden'>
          <MainContentParent />
      </div>
    </div>
  )
}

/*export async function getServerSideProps(context) {
  try {
    const client = await dbConnect
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}*/
