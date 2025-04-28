
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Team from './pages/Team/Team'
import Invoices from './pages/Invoices/Invoices'
import Contacts from './pages/Contacts/Contacts'
import MainLayout from './Layouts/MainLayout'
const App = () => {

  const router = createBrowserRouter([
    {path:"" , element:<MainLayout /> , children :( [
      {index:true , element :<Home />} ,
      {path:"home" , element :<Home />} ,
      {path : "team" , element : <Team />} ,
      {path : "invoices" , element : <Invoices />} ,
      {path : "contacts" , element : <Contacts />}
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