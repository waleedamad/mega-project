import './App.css'
import MainPage from './components/MainPage/MainPage'
import Navbar from './components/Navbar/Navbar'
import Card from './components/CardData/Card'
import Waves from './components/DiscountOffer/DiscountOffer'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/LoginPage/Login'
import Contact from './components/Contact/Contact'
import Cart from './components/AddToCart/Cart'
import Dashboard from './components/Dashboard/Dashboard'


function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<Card />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
