import React, {useEffect,useState} from 'react'
import {useSession} from 'next-auth/react'
import Navbar from '../components/Navbar'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Profile() {
    const {data:session} = useSession()
    const [user,setUser] = useState([])
    const router = useRouter()

/*     useEffect(() => {
        if(!session){
            router.push("/")
        }
    }, [session])
     */


    return (
        <div className='dark:bg-slate-500 h-screen'>
            <Navbar />
            <div>
                <div className='bg-gray-200 dark:bg-slate-800 dark:text-white w-10/12 sm:w-3/12 mt-12 sm:mt-0 m-auto h-[80vh] rounded-xl'>
                    <img className='rounded-full h-3/6 m-auto shadow-xl shadow-gray-600 mb-12 pt-2' src={session && session.user.image}/>
                    <div className='text-center'>
                        <p>{session && session.user.name}</p>
                        <p>{session && session.user.email}</p>
                        <button onClick={() => signOut({ callbackUrl: `/` })} className='mt-12 py-2 px-3 bg-red-500 text-white rounded-md'>Log out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
