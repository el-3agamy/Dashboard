
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Team from './pages/Team/Team'
import Invoices from './pages/Invoices/Invoices'
import Contacts from './pages/Contacts/Contacts'
import MainLayout from './Layouts/MainLayout'
import Profile from './pages/Profile/Profile'
import Calendar from './pages/Calendar/Calendar'
import FAQ from './pages/FAQ/FAQ'
import BarChart from './pages/BarChart/BarChart'
import LineChart from './pages/LineChart/LineChart'
import PieChart from './pages/PieChart/PieChart'
import "./App.css"
const App = () => {
  const router = createBrowserRouter([
    {path:"" , element:<MainLayout /> , children :( [
      {index:true , element :<Home />} ,
      {path:"home" , element :<Home />} ,
      {path : "team" , element : <Team />} ,
      {path : "invoices" , element : <Invoices />} ,
      {path : "contacts" , element : <Contacts />} ,
      {path : "profile" , element : <Profile/>} ,
      {path : "calendar" , element : <Calendar />} ,
      {path : "faq" , element : <FAQ />} ,
      {path : "barChart" , element : <BarChart />} ,
      {path : "lineChart" , element : <LineChart/>} ,
      {path : "pieChart" , element : <PieChart/>} ,
    ])
  }])
  return (
    <>
        <RouterProvider router={router} > 
        </RouterProvider>
    </>
  )
}

export default App