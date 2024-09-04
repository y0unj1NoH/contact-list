import React, { useState, useCallback} from 'react';
import styled, { css } from 'styled-components';


const LabelInputBlock = styled.div`  
  display: flex;
  justify-content: space-between;
  align-items: center;


  label,
  input {
    display: block;
    line-height: 1.5;
  }

  label {
    font-weight: bold;
    font-size: 1.125rem;
    color: #212529;
    transition: all 0.125s ease-in;
    ${(props) =>
      props.focus &&
      css`
        color: #2478FF;
      `}
  }

  input {
    padding: 0.2rem 0.4rem;
    font-size: 1.125rem;
    border: 1px solid lightgray;
    border-radius: 0.25rem;
    outline: none;

    width: 70%;
    color: #495057;
    transition: all 0.125s ease-in;
    ${(props) =>
      props.focus &&
      css`
        color: #2478FF;
      `}
    &::placeholder {
      color: #868E96;
    }
    &:disabled {
      color: #868E96;
    }
  }
`


const LabelInput = React.forwardRef(({ 
    label, 
    name,
    id,
    type,
    value,
    placeholder, 
    onChange,
    disabled,
    ...props 
},ref) => {

const [focus, setFocus] = useState(false);

const onFocus = useCallback(() => {
  setFocus(true);
}, []);

const onBlur = useCallback(() => {
  setFocus(false);
}, []);

  return (
    <LabelInputBlock focus={focus}>
      {label ? (<label htmlFor={name}>{label}</label>): undefined}
      <input 
        ref={ref}
        name={name}
        id={id}
        type={type} 
        value={value} 
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        {...props}
      />
    </LabelInputBlock>
  );
})

LabelInput.displayName = 'LabelInput';

export default LabelInput;