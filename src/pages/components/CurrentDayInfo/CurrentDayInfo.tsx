import React from 'react'
import s from './CurrentDayInfo.module.scss'
import image_cloud from '../../../assets/images/cloud.png'
import CurrentDayInfoItem from "./CurrentDayInfoItem";

interface Props {

}

export interface Item {
    icon_id: String,
    name: String,
    value: String,
}


const CurrentDayInfo = (props: Props) => {

    const items= [
        {
            icon_id: 'temperature',
            name: 'Temperature',
            value: '13, feels like 6 degrees'
        }, {
            icon_id: 'pressure',
            name: 'Pressure',
            value: '1002 mb, normal pressure'
        }, {
            icon_id: 'precipitation',
            name: 'Precipitation',
            value: 'Light chance of precipitation'
        }, {
            icon_id: 'wind',
            name: 'Wind',
            value: '3m/s south - west/ mild'
        },

    ]
    return (
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map((item: Item) => (
                    <CurrentDayInfoItem item={item} />
                ))}
            </div>
            <img className={s.cloud__img} src={image_cloud} alt="cloud" />
        </div>
    )}


export default CurrentDayInfo