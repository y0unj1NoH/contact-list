// contactList랑 searchTemplate랑 한번 묶어서 배치해야할 것 같은데
//  그냥 app.css에서 하는 수밖에 없나?
import  { useState } from 'react';
import ContactItem from './ContactItem';

const ContactList = () => {
    const [list, setList] = useState(JSON.parse(localStorage.getItem("contactList")) || []);
    const ContactListBlock = 'ul'

    const onDelete = (phone) => {
        setList(list.filter(item => item.phone !== phone));
    }
    return (
        <ContactListBlock>
            {list && list.map((item, index) =>{
                <ContactItem
                    key={index}
                    item={item}
                    onDelete={onDelete}>
                </ContactItem>
            })} 
        </ContactListBlock>
    )
}

export default ContactList;

