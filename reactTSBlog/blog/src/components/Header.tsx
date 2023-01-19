import React from 'react';
import './Header.css';
import Menu from './Menu';
interface IHeaderProps {};

const Header: React.FunctionComponent<IHeaderProps> =() => {
  return (
    <>
    <div className='navbar'>
      <h1>Tiny Blog&nbsp;&nbsp;</h1> 
      <Menu />
    </div>
    
    </>
  );
}
 export default Header;