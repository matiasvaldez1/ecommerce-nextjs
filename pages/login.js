import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  return (
    <div>
      <button onClick={() => signIn("github",{ callbackUrl: 'http://localhost:3000/home' })}>Sign in with github</button>
    </div>
  )
}