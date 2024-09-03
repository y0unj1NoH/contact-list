const Header = ({
    children,
    level=1,
    strong,
    underline,
    color,
    ...props}) => {
      let Tag = `h${level}`;
  
      if( level < 1 || level > 6) {
        console.warn('Header level must be between 1 and 6');
        Tag = 'h1';
      }
  
      const fontStyle = {
        fontWeight: strong ? 'bold' : 'normal',
        textDecoration: underline ? 'underline' : undefined,
        color: color,
      }
  
    return (
        <Tag style={{...props.style, ...fontStyle}}>{children}</Tag>
    );
  }
  
  export default Header;