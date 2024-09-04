import { useState, useCallback} from 'react';
import styled, { css } from 'styled-components';

import CustomSelect from '../common/CustomSelect';
import RegisterModal from './RegisterModal';
import Button from '../common/Button';

// https://velog.io/@ghwnd6448/Styled-Component-%EC%82%AC%EC%9A%A9%EC%8B%9C-warning-p08m2eaz
// 모르고 Styled Component 사용시 태그를 함수 컴포넌트 안쪽에 선언한 해서 에러생김
// The component styled.div with the id of "sc-fzqAui" has been created dynamically.
const RegisterSelectBlock = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;

        p{
            line-height: 1.5;
            font-weight: bold;
            font-size: 1.125rem;
            color: #212529;
            text-align: left;
            transition: all 0.125s ease-in;
            ${(props) =>
            props.focus &&
            css`
                color: #2478FF;
            `}
        }

        & > :first-child {
            flex: 0.3;
        }

        // 어떻게 한지 나도 잘 모르겠지만 됐다?!
        // 왜 줄 맞춰진지 모르겠음
        & > :nth-child(2) {
            flex: 0.7;
        }

        button{
            flex: 0 1 auto; 
            // 이거 select랑 똑같이 높이 맞줘야 함
            padding: 0.6rem 0.4rem;
        }
       

    `;    


const RegisterSelect = ({ orgList, setOrgList, handleChange, viewModal, setViewModal, ...props }) => {

    
    const [focus, setFocus] = useState(false);

    const onFocus = useCallback(() => {
    setFocus(true);
    }, []);

    const onBlur = useCallback(() => {
    setFocus(false);
    }, []);

    return(
        <RegisterSelectBlock focus={focus} {...props}>
        <p>그룹</p>
        <CustomSelect id='org-select' list={orgList} onChange={handleChange} 
            onFocus={onFocus}
            onBlur={onBlur} 
            />
        
        <Button 
            onClick={(e)=>{
                e.preventDefault();
                setViewModal(true);
            }}>
            그룹 추가
        </Button>

        {viewModal && <RegisterModal 
                list={orgList} 
                setList={setOrgList} 
                setViewModal={setViewModal} />}
    </RegisterSelectBlock>
    )
}

export default RegisterSelect;