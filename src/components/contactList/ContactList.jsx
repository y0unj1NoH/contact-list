import  { useState } from 'react';
import ContactItem from './ContactItem';

// 거지같은 실수를 했다.......props {}로 안감싸서 그렇다...
const ContactList = ({keyword,...props}) => {
    // 0, 1,2,가 왜 나오는거지?
    // warning: Invalid attribute name: `0`
    const [contactList, setContactList] = useState(JSON.parse(localStorage.getItem("contactList")) || []);
    const ContactListBlock = 'ul'

    const onDelete = (phone) => {
        setContactList(contactList.filter(item => item.phone !== phone));
    }

    // 필터에서 {}를 쓰면 return하여 불린값을 줘야함 안쓰면 안줘도됨
    const filteredList = keyword ? contactList.filter((item) => 
                                item.name.toLowerCase().includes(keyword) 
                                || item.phone.toLowerCase().includes(keyword) 
                                || item.group.toLowerCase().includes(keyword))
                            : contactList;


    return (
        <ContactListBlock {...props}>
            {filteredList ? filteredList.map((item, index) =>(
                <ContactItem
                    key={index}
                    item={item}
                    // 화살표함수로 안해서 즉시 실행돼서 다지워짐..;
                    onDelete={() => onDelete(item.phone)}
                    >
                </ContactItem>
            )): <p>검색 결과가 없습니다</p>}
        </ContactListBlock>
    )
}

export default ContactList;

