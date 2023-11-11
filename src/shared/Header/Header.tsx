
import React from "react"
import s from "./Header.module.scss"
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import Select from 'react-select'

function Header () {

    const options = [
        { value: 'city-1', label: 'Visaginas' },
        { value: 'city-2', label: 'Ipswich' },
        { value: 'city-3', label: 'Vilnius' }
    ]

    const colourStyles = {
        control: (styles: any) => ({...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            boarderRadius: '10px',
            zIndex: 100,
        })
    }


    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id={'header-logo'} /></div>
                <div className={s.title}>ReactWeather</div>
            </div>
            <div className={s.wrapper}>
                <GlobalSvgSelector id={'change-theme'} />
                <Select
                    defaultValue={options[0]}
                    styles={colourStyles}
                    options={options}
                />
            </div>
        </header>
    )
}


export default Header