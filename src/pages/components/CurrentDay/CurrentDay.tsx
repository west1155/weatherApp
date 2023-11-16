import React, {useEffect} from 'react'
import s from './CurrentDay.module.scss'
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";
import {storage} from "../../../context/storage/Storage";

interface Props {
}





const CurrentDay = (props: Props) => {


    const temperature = storage.getItem('temp_c')

    useEffect(() => {
        return (
            <div className={s.this_day_temp}>{temperature}</div>
        )

    }, [temperature]);

    return <div className={s.currentDay}>
        <div className={s.top_block}>
            <div className={s.top_block_wrapper}>
                <div className={s.this_day_temp}>{temperature}</div>
                <div className={s.current_day}>Today</div>
            </div>
            <GlobalSvgSelector id={'sun'}/>
        </div>
        <div className={s.bottom_block}>
            <div className={s.this_local_time}>
                Time is: <span>19:15:23</span></div>
            <div className={s.this_location}>
                TimeLocation<span>London</span></div>
        </div>
    </div>
}


export default CurrentDay