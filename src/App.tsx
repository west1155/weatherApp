import React from 'react';
import Home from './pages/components/Home/Home'
import Header from '../src/shared/Header/Header'
import MonthStatistics from "./pages/components/Month_Statistics/MonthStatistics";
import { Route, Routes } from "react-router-dom"
import './styles/index.scss'



const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path={'/month-statistics'} element={<MonthStatistics/>}></Route>
      </Routes>
    </div>
  )
}


export default App