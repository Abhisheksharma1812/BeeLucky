import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Header from './components/Header'  
import './styles.css'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   
      <Header />
    <App />
  </BrowserRouter>


)
