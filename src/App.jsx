import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import AuthLayout from './layout/AuthLayout';
import ProductDetails from './pages/ProductDetails';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/' element={
            <AuthLayout>
              <Home />
            </AuthLayout>
          } />


          <Route path='/shop' element={
            <AuthLayout>
              <Shop />
            </AuthLayout>
          } />

          <Route path='/about' element={
            <AuthLayout>
              <About />
            </AuthLayout>
          } />


          <Route
            path="/products/:id"
            element={
              <AuthLayout>
                <ProductDetails />
              </AuthLayout>
            }
          />

        </Routes>
      </BrowserRouter>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />

    </div>
  )
}

export default App
