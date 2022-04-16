import React,{useState} from 'react'
import logo from '../public/logo.jpg'
import Link from 'next/link'
import Cart from './Cart'
import { useSession } from 'next-auth/react'
import Router from 'next/router'

export default function Navbar() {
	const {data : session} = useSession()
	const [isOn, setIsOn] = useState(false)
	const toggleSwitch = () => {
		setIsOn(!isOn);
		document.documentElement.classList.toggle("dark");
	};
  return (
<div className="flex items-center h-20 px-6 justify-between shadow-sm relative z-50 bg-white dark:bg-slate-800 dark:text-white">
	<Link href={"/"}>
	<h1 className='flex-1 no-underline block h-8 text-2xl cursor-pointer dark:text-white'>Loudrop <a className='text-red-500'>Store</a></h1>
	</Link>
	<div className="flex-none md:flex md:justify-center md:h-full">
		<Link href={"/"}>
			<a className="h-full flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400"> Home</a>
		</Link>
		<Link href={"/products"}>
			<a className="h-full flex items-center mx-4 px-2 transition-colors duration-300 ease-in-out hover:text-blue-400"> Products</a>
		</Link>
		<Link href={"/profile"}>
			<a className="h-full cursor-pointer flex items-center mx-4 px-2 border-b-2 border-transparent transition-colors duration-300 ease-in-out hover:text-blue-400">Profile</a>
		</Link>
	</div>
	<div className="flex-1 items-center justify-end md:flex">
		<button className='mx-6' onClick={() => toggleSwitch()}>
			{isOn ? "🌞" : "🌙"}
		</button>
		<Cart />
		{session ?
		<Link href={"/profile"}>
		<div className="cursor-pointer my-2 relative rounded-full w-12 h-12"> <img src={session && session.user.image} className="absolute left-0 top-0 w-full h-full rounded-full object-cover" /> </div>
		</Link>
		: (
			<div className='cursor-pointer bg-red-600 text-white p-2 rounded-sm'>
				<Link href={"/login"}>Sign up</Link>
			</div>)
		}
	</div>
</div>
  )
}
