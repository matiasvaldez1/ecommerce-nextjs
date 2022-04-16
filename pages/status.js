import React from 'react'
import NavBar from '../components/Navbar'
import { useRouter } from 'next/router'

export default function Status() {
  const router = useRouter()
  return (
    <>
    <NavBar />
        <div className="bg-green-100 rounded-lg py-5 px-6 text-base text-green-700 mb-3">
      Your purchase has been made <a className="font-bold text-green-800">successfully</a>. Thanks you for choosing us.
        </div>
        <div className='flex justify-center animate-pulse'>
          <button className='bg-green-200 border-2 border-green-500 rounded-sm p-1 hover:opacity-40' onClick={() =>router.push("/") }>Go back to home</button>
        </div>
    </>
  )
}
