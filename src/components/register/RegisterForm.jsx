import React, { useState } from 'react';
import Button from '../common/Button';
import LabelInput from '../common/LabelInput';
import ErrorText from '../error/ErrorText';
import useForm from '../../hooks/useForm';
import CustomSelect from '../common/CustomSelect';
import RegisterModal from './RegisterModal';

const sleep = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}

const RegisterForm = () => {
    const SelectableBlock = 'div';
    
    const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
        initialValues: {
            name: '',
            phone: '',
            group: '',
            memo: '',
        },
        onSubmit: async () => {
            await sleep();
            console.log('submit');
        },
        validate: (name, phone) => {
            const newErrors = {};

            if (!name) {
                newErrors.name = '이름을 입력해 주세요';
            }
            if (!phone) {
                newErrors.phone = '전화번호를 입력해 주세요';
            }

            return newErrors;
        }
    })

    const initialList =  [
            { value: "미그룹", label: "미그룹" },
            { value: "가족", label: "가족" },
            { value: "친구", label: "친구" },
            { value: "회사", label: "회사" }
    ]
    
    const [list, setList] = useState(initialList);
    const [selected, setSelected] = useState('미그룹');
    const [viewModal, setViewModal] = useState(false);
    
    return (
        <form onSubmit={handleSubmit}>
            <LabelInput 
                label="이름" 
                name="name" 
                id="name"
                type="text" 
                placeholder="이름을 입력해 주세요" 
                onChange={handleChange}
            />
            {/* TypeError: Cannot read properties of undefined (reading 'name') */}
            {errors.name && <ErrorText error={errors.name} />}
            <LabelInput 
                label="전화번호" 
                name="phone"
                id="phone"
                type="text" 
                placeholder="전화번호를 - 빼고 입력해 주세요" 
                onChange={handleChange}
            />
            {errors.phone &&  <ErrorText error={errors.phone} /> }

            <SelectableBlock>
                <p>그룹</p>
                <CustomSelect list={list} onChange={handleChange} setSelected={setSelected}/>
                {/* 모달 우웩 */}
                <Button 
                    onClick={()=>{
                        setViewModal(true);
                    }}>
                    그룹 추가
                </Button>
            </SelectableBlock>

            <RegisterModal 
                list={list} 
                setList={setList} 
                setViewModal={setViewModal} />

            <LabelInput 
                label="간단한 기록" 
                name="memo" 
                id="memo"
                type="text" 
                placeholder="간단한 기록을 입력해 주세요" 
                onChange={handleChange}
            />

            <Button type="submit" disabled={isLoading} >저장</Button>
        </form>
    )

}

export default RegisterForm;