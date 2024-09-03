import React, { useEffect } from 'react';
import Button from '../common/Button';
import LabelInput from '../common/LabelInput';

const RegisterModal = React.forwardRef(
    ({list, setList, setViewModal}, ref) => {

    const onAdd = () => {
        setList([...list, { value: "미그룹", label: "미그룹" }]);
        ref.current.value = '';
        ref.current.focus();
    }

    const onDelete = (id) => {
        setList(list.filter(item => item.id !== id));
    }

    useEffect(() => {
        console.log('list', list);
    },[list])

    return (
        <>
            <h2>그룹 관리</h2>
            <Button onClick={()=>{
                setViewModal(false);
            }}>X</Button>
            <ul>
                {list.map((item, index) => (
                <li key={index}>
                    {item.value} 
                    <Button onClick={() => onDelete(index)}>X</Button>
                </li>))
            }
            </ul>

            <LabelInput ref={ref}>저장</LabelInput>
            <Button onClick={onAdd}>추가</Button>

        </>
    )
}
)

RegisterModal.displayName = 'RegisterModal';

export default RegisterModal;

