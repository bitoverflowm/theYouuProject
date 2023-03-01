"use client"
import { useRouter } from "next/navigation"

import SpotLightingProtocol from "@/components/protocols/spotLightingProtocol"

const Protocol = () => {
    const router = useRouter()

    return (
        <div className='grid w-screen place-content-center sm:pt-10 top-0 min-h-screen bg-opacity-10 bg-gradient-to-br from-bito-white to-nft-glow rounded-lg '>
            <div className='cursor-pointer pt-6 pl-6 ' onClick={() => router.push('/')}>
            X close 
            </div>
            <SpotLightingProtocol />
        </div>
    )
}

export default Protocol

