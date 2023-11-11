
import React from "react";
import {Item} from "./CurrentDayInfo";
import { IndicatorSvgSelector } from '../../../assets/icons/indicators/IndicatorSvgSelector';
import s from './CurrentDayInfo.module.scss'
interface Props {
    item: Item

}


const CurrentDayInfoItem = ({ item }: Props) => {
        const { icon_id, name, value } = item;
        return (
            <div className={s.item}>
                <div className={s.indicator}>
                    <IndicatorSvgSelector id={icon_id} />
                </div>
                <div className={s.indicator__name}>{name}</div>
                <div className={s.indicator__value}>{value}</div>
            </div>
        );
    };



export default CurrentDayInfoItem