import React from 'react'
import s from './Home.module.scss'
import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentDayInfo from "../CurrentDayInfo/CurrentDayInfo";

interface Props {

}

const Home = (props: Props) => {
    return <div className={s.home}>
        <div className={s.wrapper}>
            <CurrentDay/>
            <CurrentDayInfo/>
        </div>
    </div>
}


export default Home