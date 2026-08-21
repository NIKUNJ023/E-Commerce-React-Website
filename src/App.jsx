import Home from './pages/home'
import Auth from './pages/auth'
import CheckOut from './pages/checkout'
import Navbar from './components/Navbar'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import AuthProvider from './context/AuthContext'
import ProductDetails from './pages/productDetails'
import CartProvider from './context/CartContext'

function App() {

  return (
    <AuthProvider>
      <CartProvider>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
      </Routes>
    </div>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
