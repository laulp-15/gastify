import React from 'react'

import { HashRouter, Routes, Route, Outlet } from 'react-router-dom'

// Layout components
import Header from './features/layout/components/Header'
import Content from './features/layout/components/Content'
import Footer from './features/layout/components/Footer'

// Auth pages
import Login from './features/auth/components/Login'
import Register from './features/auth/components/Register'
import ForgotPassword from './features/auth/components/ForgotPassword'
import PrivateRoute from "./features/auth/components/PrivateRoute"
import Dashboard from './features/dashboard/pages/Dashboard'

// API
import ApiRyC from './shared/pages/ApiRyC'

// Layout compartido: Header + contenido de la ruta + Footer
function SharedLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<SharedLayout />}>
                    <Route path="/" element={<Content />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/api" element={<ApiRyC />} />
                </Route>
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes