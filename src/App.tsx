import React from 'react';
import Home from './pages/components/Home/Home'
import Header from '../src/shared/Header/Header'
import MonthStatistics from "./pages/components/Month_Statistics/MonthStatistics";
import {Route, Routes} from "react-router-dom"
import './styles/index.scss'
import Week from "./pages/components/Week/Week";


const App = () => {
    return (
        <div className="global-container">
            <div className="container">
                <Header/>
                <Home/>
                {/*<Routes>
                    <Route path={'/'} index  element={<Home/>}></Route>
                    <Route path={'/month-statistics'} element={<MonthStatistics/>}></Route>
                </Routes>*/}
                <Week/>
            </div>
        </div>
    )
}


export default App