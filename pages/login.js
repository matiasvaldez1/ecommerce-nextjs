import { useSession, signIn, signOut } from "next-auth/react"
import { NEXT_URL } from "../config/config"

export default function Component() {
  return (
    <>
    <h1 className='select-none no-underline block h-8 text-4xl my-8 text-center dark:text-white'>Loudrop <a className='text-red-500'>Store</a></h1>
    <h1 className='select-none no-underline block h-8 text-4xl my-8 text-center dark:text-white'><a className='text-red-500'>SignIn</a></h1>
    <div className="w-6/12 h-[400px] m-auto grid place-content-center">
      <button className="bg-slate-900 text-white p-2 rounded-md hover:opacity-70" onClick={() => signIn("github",{ callbackUrl: `${NEXT_URL}/home` })}>Sign in with Github</button>
      <button  className="bg-cyan-600 text-white p-2 rounded-md hover:opacity-70 my-2"  onClick={() => signIn("google",{ callbackUrl: `${NEXT_URL}/home` })}>Sign in with Google</button>
    </div>
    </>
  )
}