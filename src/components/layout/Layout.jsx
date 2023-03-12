import store from '@/reduc/store'
import React from 'react'
import { Provider } from 'react-redux'
import Navbar from '../navigation/Navbar'

function Layout({children}) {
  return (
    <Provider store={store}>
   <main>
    <Navbar/>
    {children}
   </main>
   </Provider>
  )
}

export default Layout