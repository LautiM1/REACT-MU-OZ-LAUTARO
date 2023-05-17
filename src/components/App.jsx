import './App.css'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DarkModeProvider } from '../context/DarkModeContext.js'

import { ToastContainer } from 'react-toastify';


import { Navbar } from './Navbar/Navbar'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer'
import { Checkout } from './Checkout/Checkout'
import { Cart } from '../Cart/Cart'
import { createProducts } from '../firebase/firebase'
export const App = () => {
  //createProducts()
  return (
    <div>
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar />
          <ToastContainer />
            <Routes>
            
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:category' element={<ItemListContainer />} />
              <Route path='/product/:id' element={<ItemDetailContainer />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
        </DarkModeProvider>
      </BrowserRouter>

   
    </div>
  )
}





