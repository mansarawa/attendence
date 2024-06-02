import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { DemoApp } from './components/Demo';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import UserDashboard from './components/UserDashboard';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import LogoutProvider from './context/logoutContext';

function App() {
    return (
        <BrowserRouter>
            <LogoutProvider>
                <Navbar />
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/userDashboard' element={<UserDashboard />} />
                    <Route path='/' element={<Dashboard />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <ToastContainer />
            </LogoutProvider>
        </BrowserRouter>
    );
}

export default App;
