import { useEffect, useRef } from 'react';
import Button from '../common/Button';
import LabelInput from '../common/LabelInput';
import Modal from '../common/Modal';

const RegisterModal = 
    ({list, setList, setViewModal}) => {

    const ref = useRef();

    const onAdd = (e) => {
        e.preventDefault()
        const value = ref.current.value;
        if (!value) return;
        if (list.find(item => item.value === value)) {
            alert('이미 존재하는 그룹입니다');
            ref.current.value = '';
            ref.current.focus();
            return;
        }

        const newList = [...list, { value: value, label: value }]
        setList(newList);
        localStorage.setItem("orgList", JSON.stringify(newList));
        ref.current.value = '';
        ref.current.focus();
        
    }

    const onDelete = (e, id) => {
        e.preventDefault()
        const newList = list.filter(item => item.value !== id);
        setList(newList);
        localStorage.setItem("orgList", JSON.stringify(newList));
    }

    useEffect(() => {
        console.log('list', list);
    },[list])

    return (
            <Modal onClose = {()=>{ setViewModal(false)}} >
                <>
                    <h2>그룹 관리</h2>
                    <ul>
                        {list.map((item, index) => (
                            <li key={index}>
                                {item.value} 
                                <Button className="modal-close-btn" onClick={(e) => {onDelete(e, item.value)}} backgroundColor={'transparent'} color={'#333'}>X</Button>
                            </li>))
                        }
                    </ul>
                    <div className='add-con'>
                        {/* input에 자식을 넣으면 안됨 */}
                        {/* Error: input is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`. */}
                        <LabelInput ref={ref}/>
                        <Button onClick={onAdd}>추가</Button>
                    </div>
                </>

            </Modal>           
    )
}

RegisterModal.displayName = 'RegisterModal';

export default RegisterModal;

