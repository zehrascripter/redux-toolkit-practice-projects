import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Header from './components/Header/Header'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

const App = () => {
  return (
    <>
    
<Header/>
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/:id' element={<ProductDetails/>}></Route>
    </Routes>
    
    </>
  )
}

export default App