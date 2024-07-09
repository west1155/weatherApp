import {useEffect, useState} from "react";
import {storage} from "../../../context/storage/Storage";


const [temp, setTemp] = useState('')

const CurrentTemp = () => {

    setTemp(storage.getItem('temp_c'))

    useEffect(() => {

        return (() => {
            <div>{temp}</div>
        })

    }, [temp]);

    return <div>{temp}</div>
}
export default CurrentTemp