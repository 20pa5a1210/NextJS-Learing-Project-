'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
export default function Contact(){
    const router = useRouter( )
    return(
        <div>
            <h1>Contact Me</h1>
            <Link href="/">Home</Link>
            <Link href={`/blog/dbkbkv`}>Post</Link>
            <button onClick={()=>router.push('/ ')} >Home</button>
        </div>
    )
}