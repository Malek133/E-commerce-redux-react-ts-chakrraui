import {Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Aboute from './pages/Aboute'
import ProductPage from './pages/Product'
import Navbar from './components/Navbar'
import ProductDetails from './pages/ProductDetails'

function App() {
  

  return (
    <>
    <Navbar />
     <Routes>
     <Route path="/" element={<h1>Alphazero</h1>} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboute" element={<Aboute />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />

     </Routes>
    </>
  )
}

export default App
