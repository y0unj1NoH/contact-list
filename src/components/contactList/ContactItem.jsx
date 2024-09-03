import { useState } from 'react';
import Button from '../common/Button';
import ContactModal from './ContactModal';

const ContactItem = ({ item, onDelete }) => {
    // 대문자 주의!
    const ContactItemBlock = 'li';
    const [viewModal, setViewModal] = useState(false);

    return (
        <ContactItemBlock>
            <span>{item.name}</span> 
            <span>{item.phone}</span>
            <span>{item.group}</span>
            <Button className="item-detail-btn" onClick={() => setViewModal(true)}>세부사항</Button>
            <Button className="item-delete-btn" onClick={onDelete}>삭제</Button>
            {viewModal && <ContactModal item={item} onClose={() => setViewModal(false)} />}
        </ContactItemBlock>
    )
}

export default ContactItem;