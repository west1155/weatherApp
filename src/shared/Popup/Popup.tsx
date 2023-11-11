import React from "react";
import s from "./Popup.module.scss";
import CurrentDayInfoItem from "../../pages/components/CurrentDayInfo/CurrentDayInfoItem";
import {Item} from "../../pages/components/CurrentDayInfo/CurrentDayInfo";
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";


interface Props {

}

export const Popup = (props: Props) => {

    const items = [
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
        <>
            <div className={s.blur}>
                <div className={s.popup}>
                    <div className={s.day}>
                        <div className={s.day_temp}>20</div>
                        <div className={s.day_name}>Wednesday</div>
                        <div className={s.img}><GlobalSvgSelector id={"small_rain_sun"} /></div>
                        <div className={s.bottom_block}>
                            <div className={s.this_local_time}>
                                Time is: <span>19:15:23</span></div>
                            <div className={s.this_location}>
                                TimeLocation<span>London</span></div>
                        </div>

                    </div>
                    <div className={s.this__day_info_items}>
                        {items.map((item: Item) => (
                            <CurrentDayInfoItem item={item}/>
                        ))}
                    </div>
                    <div className={s.close}>
                        <GlobalSvgSelector id={'close'}/>
                    </div>
                </div>

            </div>
        </>
    )


}


export default Popup