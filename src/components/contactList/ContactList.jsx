import  { useState, useEffect } from 'react';
import ContactItem from './ContactItem';

// 거지같은 실수를 했다.......props {}로 안감싸서 그렇다...
const ContactList = ({length, setLength, keyword,...props}) => {
    // 0, 1,2,가 왜 나오는거지?
    // warning: Invalid attribute name: `0`
    
    useEffect(()=>{
        setContactList(JSON.parse(localStorage.getItem("contactList")) || []);
    },[length])
    
    // 리렌더링될 때 useState은 초기 상태를 다시 설정하지 않아서 반영이 안된 거였음 
    const [contactList, setContactList] = useState(JSON.parse(localStorage.getItem("contactList")) || []);
    const ContactListBlock = 'ul'

    const onDelete = (phone) => {
        const newList = contactList.filter(item => item.phone !== phone);
        setContactList(newList);
        localStorage.setItem("contactList", JSON.stringify(newList));
        setLength(newList.length);
    }

    // 필터에서 {}를 쓰면 return하여 불린값을 줘야함 안쓰면 안줘도됨
    const filteredList = keyword ? contactList.filter((item) => 
                                item.name.toLowerCase().includes(keyword) 
                                || item.phone.toLowerCase().includes(keyword) 
                                || item.group.toLowerCase().includes(keyword))
                            : contactList;


    return (
        <ContactListBlock {...props}>
            {/* useEffect하니까 새로 렌더링이 되긴하는데, 아래 li들이 갱신이 안되는 문제 확인 */}
            {/* useEffect에서 로컬스토리지 값을 가져와 해결 */}
            <p>Current length: {length}</p>
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

