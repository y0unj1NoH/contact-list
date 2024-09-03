import Modal from "../common/Modal"

const ContactModal = ({ item, onClose }) => {
    return (
        <Modal onClose={onClose}>
            <>
                <h2>연락처 상세 정보</h2>
                <p><strong>이름:</strong> <span>{item.name}</span></p>
                <p><strong>전화번호:</strong> <span>{item.phone}</span></p>
                <p><strong>그룹:</strong> <span>{item.group}</span></p>
                <p><strong>메모:</strong> <span>{item.memo}</span></p>
            </>
        </Modal>
    )
}

export default ContactModal;