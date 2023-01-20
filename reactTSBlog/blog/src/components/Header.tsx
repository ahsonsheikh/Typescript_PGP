import React from 'react';
import './Header.css';
import Menu from './Menu';

const Header: React.FunctionComponent = () => {
  return (
    <>
      <div className='navbar'>
        <h2>Tiny Blog&nbsp;&nbsp;</h2>
        <Menu />
      </div>
    </>
  );
}
export default Header;