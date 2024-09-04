import styled, { css } from 'styled-components';

const ButtonBlock = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #b4b4b4;
    color: #FFFFFF;
    &:hover,
    &:focus {
      background: #8c8c8c;
    }
      
    border-radius: 4px;
    padding-top: 0;
    padding-bottom: 0;

    ${(props) =>
      props.size === 'medium' &&
      css`
        height: 2rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        font-size: 1rem;
      `}
  
      ${(props) =>
      props.size === 'large' &&
      css`
        height: 2.5rem;
        padding-left: 1.125rem;
        padding-right: 1.125rem;
        & + & {
          margin-left: 0.875rem;
        }
        font-size: 1.125rem;
      `}
  
      &:disabled {
      cursor: not-allowed;
      background: #2E2E2E;
      color: #868E96;
      &:hover {
        background: #2E2E2E;
        color: #868E96;
      }
    }
  `;


const button = ({ 
    children, 
    // ref,
    onClick,
    backgroundColor,
    color,
    strong,
    size,
    ...props 
    }) => {
        const style = {
            backgroundColor: backgroundColor,
            color: color? color : '#FFFFFF',
            fontWeight: strong ? 'bold' : 'normal',
            size:  size,
        }

    return (
        <ButtonBlock onClick={(e) => {
            if (onClick) {
                onClick(e);
            }
            e.target.blur();
          }}  style={{...props.style, ...style}} {...props}>{children}</ButtonBlock>
    );
}

export default button;