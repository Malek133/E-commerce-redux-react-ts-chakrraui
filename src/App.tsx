import {Routes,Route} from 'react-router-dom'
import './App.css'
import Aboute from './pages/Aboute'
import ProductPage from './pages/Product'
import HomePage from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import ProductDetails from './pages/ProductDetails'
import Navbar from './components/Navbar'
// import CardPage from './pages/CardPage'
// import Lyaout from './components/lyaout/Lyaout'



function App() {
  

  return (
    <>
  <Navbar />
     <Routes>

      {/* <Route  path="/" element={<Lyaout isAuthenticated={true} />}> */}
         <Route path="/" element={<HomePage />} />
         <Route path="/signin" element={<SignIn />} />
         <Route path="/about" element={<Aboute />} />
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/product" element={<ProductPage />} />
         <Route path="/product/:id" element={<ProductDetails />} />
         {/* <Route path="/card" element={<CardPage />} /> */}
      {/* </Route> */}
    


          <Route path="/login" element={<Login  />} />
     </Routes>
    </>
  )
}

export default App