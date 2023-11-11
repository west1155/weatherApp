


import React from "react";
import s from '../Week/Week.module.scss'
import Week from "./Week";
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";


interface Props {
    week: Week
}

export const Card = ({week}: Props) => {
    return (
        <div className={s.card}>
            <div className={s.day}>{week.day}</div>
            <div className={s.day_info}>{week.day_info}</div>
            <div className={s.img}> <GlobalSvgSelector id={week.icon_id} /> </div>
            <div className={s.temp_day}>{week.temp_day}</div>
            <div className={s.temp_night}>{week.temp_night}</div>
            <div className={s.info}>{week.info}</div>
        </div>
    )

}



export default Card