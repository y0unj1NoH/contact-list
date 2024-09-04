import { useEffect } from 'react';
import Select from 'react-select';


const CustomSelect = ({ list, onChange, onFocus, onBlur }) => {

    useEffect(()=>{
        onChange(list[0])
    },[])

    const onChangeSelect = (e) => {
        onChange(e);
    }

    return (
        <Select className="select"
            defaultValue={list[0]}
            options={list}
            onChange={onChangeSelect}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
}

export default CustomSelect;