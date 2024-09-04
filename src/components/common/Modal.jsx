import styled, { css } from 'styled-components';
import Button from './Button';

const ModalBlock = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
`

const ModalInner = styled.div`
    background: white;
    color: black;
`

const Modal = ({ children, onClose }) => {
    return (
        <ModalBlock>
            <Button backgroundColor={'#FF6B6B'} onClick={onClose}>닫기</Button>
            <ModalInner>
            {children}
            </ModalInner>
        </ModalBlock>
        
    );
}

export default Modal;