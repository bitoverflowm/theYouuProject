'use client';

import { useUser } from "@/lib/hooks"
import Link from "next/link";

const Dashbaord = () => {
     const user = useUser()

     const logout = () => {
        //add later
     }

     return (
            <div>
                {
                    user && (
                        <div className="text-white">
                            {console.log(user)}
                            <h1>Dashboard</h1>
                            <p>Logged in as {user.email}</p>
                            <Link href="/" as="/api/logout">Logout</Link>
                        </div>
                    )
                }
            </div>
     )
}

export default Dashbaord