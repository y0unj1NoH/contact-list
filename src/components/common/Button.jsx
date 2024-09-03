const button = ({ 
    children, 
    // ref,
    onClick,
    backgroundColor,
    size,
    strong,
    fontSize,
    color,
    // responsive = false,
    ...props 
    }) => {
        const style = {
            backgroundColor: backgroundColor,
            size:  typeof size === 'string' ? 'Button--size--' + size : 'medium',
            fontWeight: strong ? 'bold' : 'normal',
            fontSize: typeof fontSize === 'number' ? size : undefined,
            color: color,
        }

    return (
        <button onClick={(e) => {
            if (onClick) {
                onClick(e);
            }
            e.target.blur();
          }}  style={{...props.style, ...style}} {...props}>{children}</button>
    );
}

export default button;