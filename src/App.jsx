import { useState } from 'react'
import './App.css'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'
import Header from './components/custom/Header'
import { Toaster } from './components/ui/sonner'
import Footer from './components/custom/Footer'

function App() {
  const [count, setCount] = useState(0)
  const {user,isLoaded,isSignedIn}=useUser();

  if(!isSignedIn&&isLoaded)
  {
    return <Navigate to={'/auth/sign-in'} />
  }

  return (
    <>
      <Toaster />
      <Header/>
      <Outlet/>
      <Footer />

    </>
  )
}

export default App
