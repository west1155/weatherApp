export type Current = {
    temp_c: string;
    humidity: string;
}

export type Weather = {
    current: Current
}


export type Location = {
    value: string,
    label: string
}