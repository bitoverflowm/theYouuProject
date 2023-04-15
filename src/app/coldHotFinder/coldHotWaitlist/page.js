'use client';

import { useUser } from "@/lib/hooks"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback  } from "react";

//import logo from '../../../public/logo1.png'

const Page = () => {
     const user = useUser()

     return (
            <div className="w-screen h-full bg-white text-black">
                Hello welcome to registration
            </div>
            )
    }

export default Page;