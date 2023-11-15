import {Theme} from "../context/ThemeContext";


const components = [
    'body',
    'components',
    'card',
    'card-shadow',
    'text-color'
]

const root = document.querySelector(':root') as HTMLElement

export function changeCssVariables (theme: Theme) {
    components.forEach(component => {
        root.style.setProperty(
            `--${component}-background-default`,
            `var(--${component}-background-${theme})`)
    })
}