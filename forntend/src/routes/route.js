import React from 'react'
import { Route, Routes } from "react-router-dom"
import ShoppingCart from '../components/ShoppingCart'
import Table from '../components/table'

export default function RoutesHandler() {
  return (
    
    <Routes>
    <Route path="/" element={<ShoppingCart />} />
    <Route path="/books" element={<Table />} />
  </Routes>
  )
}
