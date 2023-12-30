"use client"
import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './loading'
import { Provider } from 'react-redux'
import authReducer from "./Redux/store"
import { configureStore } from '@reduxjs/toolkit'
import Navbar from '@/components/Navbar'
import "../styles/globals.css"


const store = configureStore({
  reducer: {
    auth: authReducer
  }
})

export default function Home() {
  return (
    <Provider store={store}>
      <main className="font-primary p-0 m-0 min-h-screen">
      <Navbar />
      <section id='home'>
        <Suspense fallback={<Loading />}>
          <h1 className='blue'>Home</h1>
        </Suspense>
      </section>
    </main>
    </Provider>
    
  )
}
