'use client';

import { useRouter } from "next/navigation"

import ColdWater from "@/components/protocols/coldwater";

const Protocol = () => {
    const router = useRouter()

    return (
        <div className='grid w-screen place-content-center sm:pt-5 min-h-screen bg-gradient-to-br from-nft-sky to-nft-blue rounded-lg '>
            <div className='cursor-pointer pl-6 pb-2 ' onClick={() => router.push('/')}> X close </div>
            <ColdWater />
        </div>
    )
}

export default Protocol

