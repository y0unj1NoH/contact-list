import { useState } from 'react';
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
        }, 500);
    });
}

const RegisterForm = ({...props}) => {
    const SelectableBlock = 'div';
    
    const onSubmit = async (values) => {
        await sleep();
        const list = JSON.parse(localStorage.getItem("contactList")) || [];

        // 기존 리스트에 이미 같은 번호 저장되어 있으면, 저장하지 않는다.
        const isExist = list.some((item) => item.phone === values.phone);
        if(!isExist) {localStorage.setItem("contactList",JSON.stringify([...list, values]));}
        else {alert("이미 저장된 번호입니다.")}
    } 

    const { values, errors, isLoading, handleChange, handleSubmit } = useForm({
        initialValues: {
            name: '',
            phone: '',
            group: '',
            memo: '',
        },
        onSubmit,
        validate: (name, phone) => {
            const newErrors = {};

            if (name.length < 1) {
                newErrors.name = '이름을 두 글자이상 입력해 주세요';
            }
            if (!phone) {
                newErrors.phone = '전화번호를 숫자만 입력해 주세요';
            }

            return newErrors;
        }
    })

    const initialOrgList =  [
            { value: "미그룹", label: "미그룹" },
            { value: "가족", label: "가족" },
            { value: "친구", label: "친구" },
            { value: "회사", label: "회사" }
    ]
    
    const [orgList, setOrgList] = useState(JSON.parse(localStorage.getItem("orgList")) || initialOrgList);
    const [viewModal, setViewModal] = useState(false);

    return (
        <form onSubmit={handleSubmit} {...props}>
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
                onChange={(e) => {
                    e.target.value = e.target.value
                                        .replace(/[^0-9]/g, '')
                                        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(-{1,2})$/g, "")
                    handleChange(e)}
                }
            />
            {errors.phone &&  <ErrorText error={errors.phone} /> }

            <SelectableBlock>
                <p>그룹</p>
                <CustomSelect list={orgList} onChange={handleChange} />
                <Button 
                    onClick={(e)=>{
                        e.preventDefault();
                        setViewModal(true);
                    }}>
                    그룹 추가
                </Button>
            </SelectableBlock>

            {viewModal && <RegisterModal 
                list={orgList} 
                setList={setOrgList} 
                setViewModal={setViewModal} />}

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