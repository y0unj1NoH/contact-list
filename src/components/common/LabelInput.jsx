import React from 'react';

// css 작업 안함
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
const LabelInputBlock = 'div';
  return (
    <LabelInputBlock>
      {label ? (<label htmlFor={name}>{label}</label>): undefined}
      <input 
        ref={ref}
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
})

LabelInput.displayName = 'LabelInput';

export default LabelInput;