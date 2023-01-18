import React from 'react';
import './Header.css';

interface IHeaderProps {};

const Header: React.FunctionComponent<IHeaderProps> =() => {
  return (
    <div className='navbar'>
      <h3>React Typescript BlogAPI</h3> 
    </div>
  );
}
 export default Header;