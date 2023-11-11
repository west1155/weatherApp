import React from "react";
import s from '../Week/Week.module.scss'


interface Props {

}

export const Tabs = (props: Props) => {


    const tabs = [
        {value: 'Week'},
        {value: '10 days'},
        {value: 'Month'}
    ]
    return (
        <div className={s.tabs}>
            <div className={s.tabs_wrapper}>
                {tabs.map(tab => (
                    <div className={s.tab} key={tab.value}>{tab.value}</div>
                ))}
            </div>
            <div className={s.cancel}>Cancel</div>

        </div>
    )

}


export default Tabs