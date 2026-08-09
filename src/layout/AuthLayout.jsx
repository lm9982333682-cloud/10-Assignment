import React from 'react';
import { Navigate } from 'react-router'
import { useAuthContext } from '../context/Auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../pages/Cart';
import { useSelector } from 'react-redux';


const AuthLayout = ({ children }) => {

    const { login } = useAuthContext();

    if (!login) return <Navigate to={'/login'} replace />

    const { cartToggle } = useSelector(state => state.cart);




    return (
        <>
            <Header />

            <main>
                {children}
            </main>


            {cartToggle && <Cart />}

            <Footer />
        </>
    );
}

export default AuthLayout
