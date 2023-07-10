import Navigation from '@/components/navigation'
import React from 'react'

function Layout({children}:{children:React.ReactNode}) {
  return (
    <>
    <Navigation/>
     {children}   
    </>
  )
}

export default Layout