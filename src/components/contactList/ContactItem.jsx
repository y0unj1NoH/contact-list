import { useState } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import Button from '../common/Button';
import ContactModal from './ContactModal';


// css 고도화 필요
const ContactItemBlock = styled.li`
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 1rem 0;
    border-bottom: 1px dashed lightgray;
    font-size: 1.125rem;
    white-space: 700px;

    strong {
        width: 25%;
    }

    .item-phone{
        width: 35%;
    }

    .item-group{
    }

    .item-detail-btn{
    }

    .item-delete-btn{
        display: flex;
        align-items: center;
        border: none;
        border-radius: 4px;
        background-color : lightgray;


        color : white;
        &:hover{
            color: tomato;
        }
    }
`



const ContactItem = ({ item, onDelete }) => {
    // 대문자 주의!
    const [viewModal, setViewModal] = useState(false);

    return (
        <ContactItemBlock>
            <strong>{item.name}</strong> 
            <span className='item-phone'>{item.phone}</span>
            <span className='item-group'>{item.group}</span>
            <Button className="item-detail-btn" onClick={() => setViewModal(true)}>세부사항</Button>
            <button className="item-delete-btn" 
                    onClick={onDelete} 
                    color={'lightgray'}><FontAwesomeIcon icon={faTrashCan} /></button>
            {viewModal && <ContactModal item={item} onClose={() => setViewModal(false)} />}
        </ContactItemBlock>
    )
}

export default ContactItem;