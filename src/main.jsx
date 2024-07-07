import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar.jsx'
import shoppingCart from './components/shoppingcart.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <shoppingCart />
    <App />
  </React.StrictMode>,
)
