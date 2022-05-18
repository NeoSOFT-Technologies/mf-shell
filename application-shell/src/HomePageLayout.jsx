import React from 'react'
import Header from 'component/Header'
import Footer from 'component/Footer'
import { Outlet } from 'react-router-dom'
import "./index.css"
export default function HomePageLayout() {
  return (
      <>
    <Header/>
    <div className='homeArea'>
    <Outlet/>
    </div>
    <Footer/>
    </>
  )
}