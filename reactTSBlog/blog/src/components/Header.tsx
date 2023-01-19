import React from 'react';
import './Header.css';
import Menu from './Menu';

const Header: React.FunctionComponent = () => {
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