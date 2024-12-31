
"use client"
import Link from 'next/link'
import { Lato } from 'next/font/google'
 
const lato = Lato({subsets: ['latin'],  weight: '700'});

export default function Navbar() {

    return(<div className="pt-8 text-orange-500 grid grid-cols-5 gap-1 text-3xl flex justify-center">

        <div className={`text-5xl py-2 pt-1 px-8 ${lato.className}`}>MySponsor</div>
        
        <div className="mt-2">
            <button className="hover:bg-slate-200 text-orange font-bold pt-1 px-4 rounded-full outline">
                
                <Link href="/pages/home">Home</Link>

            </button>
        </div>

        <div className="mt-2">
            <button className="hover:bg-slate-200 text-orange font-bold pt-1 px-4 rounded-full outline">
                
                <Link href="/pages/home/companies">Companies</Link>

            </button>
        </div>

        <div className="mt-2">
            <button className="hover:bg-slate-200 text-orange font-bold pt-1 px-4 rounded-full outline">
                
                <Link href="/pages/home/profile">Profile</Link>

            </button>
        </div>

        

    </div>)
} 