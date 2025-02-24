import React from 'react'
import {Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import Todolist from './pages/TodoList/Todolist'
import Counter from './pages/Counter/Counter'
import Home from './pages/Home/Home'
import Notepad from './pages/Notepad/Notepad'

const App = () => {
  return (
    <>
<Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/todolist' element={<Todolist/>}></Route>
      <Route path='/counter' element={<Counter/>}></Route>
      <Route path="/notepad" element={<Notepad />} />
    </Routes>
    </>
  )
}

export default App;