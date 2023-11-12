import React, {useEffect, useState} from "react"
import s from "./Header.module.scss"
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import Select from 'react-select'
import {inspect} from "util";

function Header() {

    const options = [
        {value: 'city-1', label: 'Visaginas'},
        {value: 'city-2', label: 'Ipswich'},
        {value: 'city-3', label: 'Vilnius'}
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 0 ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            boarderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: 0 ? '#fff' : '#000'
        })
    }


    const [theme, setTheme] = useState('light')

    function changeTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')

    }

    useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement
        components.forEach(component => {
            root.style.setProperty(
                `--${component}-background-default`,
                `var(--${component}-background-${theme})`)
        })
    }, [theme])

    const components = [
        'body',
        'components',
        'card',
        'card-shadow',
        'text-color'
    ]


    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id={'header-logo'}/></div>
                <div className={s.title}>Weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id={'change-theme'}/>
                </div>
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