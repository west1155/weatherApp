import React from "react";
import s from '../Week/Week.module.scss'
import Card from "./Card";
import Tabs from "./Tabs";


interface Props {

}

export interface Week {
    day: string
    day_info: string
    icon_id: string
    temp_day: string
    temp_night: string
    info: string
}

export const Week = (props: Props) => {

    const week: Week[] = [
        {
            day: 'Monday',
            day_info: '29 of August',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'cloudy'
        },
        {
            day: 'Monday',
            day_info: '29 of August',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'cloudy'
        },
        {
            day: 'Monday',
            day_info: '29 of August',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'cloudy'
        },
        {
            day: 'Monday',
            day_info: '29 of August',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'cloudy'
        },
        {
            day: 'Monday',
            day_info: '29 of August',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'cloudy'
        },
        {
            day: 'Monday',
            day_info: '29 of August',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'cloudy'
        },
        {
            day: 'Monday',
            day_info: '29 of August',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'cloudy'
        }
    ]
    return (
        <>
            <Tabs/>
            <div className={s.week}>
                {week.map((week: Week) => <Card week={week}/>)}

            </div>

        </>
    )

}


export default Week