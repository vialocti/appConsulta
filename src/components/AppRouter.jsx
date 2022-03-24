import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import FindPage from '../pages/FindPage';
import HomePage from '../pages/HomePage';
import NavBar from './NavBar';
function AppRouter() {
  return (
      <>
      

    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/consulta" element={<FindPage />} />

        </Routes>
    
    
    </BrowserRouter>
  </>
  )
}

export default AppRouter