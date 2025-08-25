import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
    <nav>
      <Link to='/'>Home</Link>&nbsp;&nbsp;
      <Link to='/about'>About</Link>&nbsp;&nbsp;
      <Link to='/contact'>Contact</Link>&nbsp;&nbsp;
    </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App


// npm create vite@latest routing-example

// Ok to proceed - enter
// React
// JavaScript

// cd routing-example
// npm i
// npm run dev