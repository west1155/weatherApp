import React, {useEffect} from 'react'
import s from './Home.module.scss'
import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentDayInfo, {Item} from "../CurrentDayInfo/CurrentDayInfo";
import Week from "../Week/Week";

interface Props {

}

const Home = (props: Props) => {

    return <div className={s.home}>
        <div className={s.wrapper}>
            <CurrentDay />
            <CurrentDayInfo/>
        </div>
            <Week/>
    </div>
}


export default Home