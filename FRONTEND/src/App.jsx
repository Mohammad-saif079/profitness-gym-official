import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home.jsx"

import Signup from "./pages/Signup.jsx"
import { Signupprovider } from './context/Signupcontext.jsx'
// import Chat from './pages/Chat.jsx'
// import { ChatProvider } from './context/Chatcontext.jsx'
// import ProtectedRoute from './components/ProtectedRoute.jsx'
// import { useAuth } from './context/Authcontext.jsx'
import LoginCheck from './components/LoginCheck.jsx'
import Gymhome from './pages/Gymhome.jsx'

// import VideoPlayer from './pages/Video.jsx'

const App = () => {

  return (

    <>
      <Routes>
        <Route path='/login' element={<Signupprovider><Home /></Signupprovider>} />
        <Route path='/signup' element={<Signupprovider><Signup /></Signupprovider>} />
        <Route path='/' element={<Signupprovider><Gymhome /></Signupprovider>} />

      </Routes>
    </>
  )
}

export default App
