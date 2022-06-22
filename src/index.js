import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Client from './Client'
import Template from './Template'
import Email from './Email'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/client" element={<Client />} />
      <Route path="/template" element={<Template />} />
      <Route path="/email" element={<Email />} />
    </Routes>
  </BrowserRouter>
)
