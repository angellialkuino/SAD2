import React from 'react';
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import App from './App';
import App2 from './App2';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    // <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/*" element={<App2 />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    // </React.StrictMode>


);
