import Button from './Button';

const Modal = ({ children, onClose }) => {
    const ModalBlock = 'div'
    const ModalInner = 'div'
    return (
        <ModalBlock>
            <Button onClick={onClose}>닫기</Button>
            <ModalInner style={{backgroundColor: "white", color: "black"}}>
            {children}
            </ModalInner>
        </ModalBlock>
        
    );
}

export default Modal;