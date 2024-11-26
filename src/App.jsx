import React from 'react'
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import { Home,About,Project, Contact } from './pages';
import Navbar from './components/Navbar';



const App = () => {
  return (
    <main className="bg-slate-300/20 ">

      <Router basename='/portfolio_3' future={{ v7_relativeSplatPath: true }}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
