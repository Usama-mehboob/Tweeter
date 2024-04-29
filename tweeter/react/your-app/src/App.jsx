import Index from './components'
import {Route, Routes, Router} from "react-router-dom"
import Login from './components/loginLayout'
import Sigup from './components/signup'
import LandingHome from './landingPage/Homepage'
// import { Router } from 'react-router-dom'

function App() {

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<LandingHome />} />
      </Routes>
    
    
    {/* <div className='w-screen h-screen bg-gray-200'>
     <Index />
    </div> */}

    </>
  )
}

export default App
