// import { useState, useCallback } from 'react';

// css 작업 안함
const LabelInput = ({ 
    label, 
    name,
    id,
    type,
    value,
    placeholder, 
    onChange,
    disabled,
    ...props 
}) => {
const LabelInputBlock = 'div';
  return (
    <LabelInputBlock>
      {label ? (<label htmlFor={name}>{label}</label>): undefined}
      <input 
        name={name}
        id={id}
        type={type} 
        value={value} 
        placeholder={placeholder}
        onChange={onChange} 
        disabled={disabled}
        {...props}
      />
    </LabelInputBlock>
  );
}

export default LabelInput;