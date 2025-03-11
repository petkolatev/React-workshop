import { Routes, Route } from 'react-router'

import Footer from '../components/Footer'
import Header from '../components/header'
import './App.css'
import '../components/CreateBook.css'
import Home from '../components/Home'
import Catalog from '../components/Catalog'
import CreateBook from '../components/CreateBook'
import Register from '../components/Register'
import Login from '../components/Login'
import SingleBook from '../components/SingleBook'


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/catalog/:bookId' element={<SingleBook />} />
        <Route path='/create' element={<CreateBook />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>


      <Footer />
    </>
  )
}

export default App
