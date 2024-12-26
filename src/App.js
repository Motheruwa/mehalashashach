import React from 'react'
import TopNavBar from './components/navbar/TopNavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Gallery from './pages/Gallerys'
import About from './pages/About'
import GoTop from './components/navbar/GoTop'
import Footer from './components/footer/Footer'
import Appointment from './pages/Apponitment'
import DetailPage from './pages/DetailPage'
import GalleryDetail from './pages/GalleryDetail'
import Blog from './pages/Blog'

const App = () => {

  return (
    <div>
      <TopNavBar/>
      <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Service/>} path='/service'/>
      <Route element={<About/>} path='/about'/>
      <Route element={<Gallery/>} path='/projects'/>
      <Route element={<Blog/>} path='/blog'/>
      <Route element={<Contact/>} path='/contact'/>
      <Route element={<Appointment/>} path='/appointment'/>
      <Route element={<DetailPage/>} path='/service/:id'/>
      <Route element={<GalleryDetail/>} path='/projects/:id'/>
    </Routes>
    <GoTop/>
    <Footer/>
    </div>
  )
}

export default App