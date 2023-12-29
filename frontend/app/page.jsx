import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './loading'
import Navbar from '@/components/Navbar'
import "../styles/globals.css"



export default function Home() {
  return (
    <main className="bg-primary-light min-h-screen ">
      <Navbar />
      <Suspense fallback={<Loading />}>
        <h1 className='blue'>Home</h1>
      </Suspense>
     
    </main>
  )
}
