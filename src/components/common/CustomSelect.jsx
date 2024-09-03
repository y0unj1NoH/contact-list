import Select from 'react-select';

const CustomSelect = ({ list, onChange, setSelected }) => {
    const onChangeSelect = (e) => {
        setSelected(e.value);
        onChange(e);
    }

    return (
        <Select className="select"
            defaultValue={list[0]}
            options={list}
            onChange={onChangeSelect}
        />
    );
}

export default CustomSelect;