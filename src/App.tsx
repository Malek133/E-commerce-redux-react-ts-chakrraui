import {Routes,Route} from 'react-router-dom'
import './App.css'
import Aboute from './pages/Aboute'
import ProductPage from './pages/Product'
import Navbar from './components/Navbar'

import HomePage from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import ProductDetails from './pages/ProductDetails'

function App() {
  

  return (
    <>
    <Navbar />
     <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/login" element={<Login />} />
     <Route path="/signin" element={<SignIn />} />
      <Route path="/about" element={<Aboute />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />

     </Routes>
    </>
  )
}

export default App
