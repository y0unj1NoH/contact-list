import styled, { css } from 'styled-components';
import Modal from "../common/Modal"

// css 고도화 필요함 + 메모가 길어질 시 텍스트 처리 필요
const ContactModalBlock = styled.div`
    width: 90%;
    margin: 0 auto;
    white-space: nowrap;
    padding: 1rem;

    h2 {
        margin-top: 0;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0;
    }
        
    li {
        display: flex;
        justify-content: space-between;
        list-style: none;
        text-align: left;
        font-size: 1.125rem;
    }
`

const ContactModal = ({ item, onClose }) => {
    return (
        <Modal onClose={onClose}>
            <ContactModalBlock>
                <h2>연락처 상세 정보</h2>
                <ul>
                    <li><strong>이름:</strong> <span>{item.name}</span></li>
                    <li><strong>전화번호:</strong> <span>{item.phone}</span></li>
                    <li><strong>그룹:</strong> <span>{item.group}</span></li>
                    <li><strong>메모:</strong> <span>{item.memo}</span></li>
                </ul>
            </ContactModalBlock>
        </Modal>
    )
}

export default ContactModal;