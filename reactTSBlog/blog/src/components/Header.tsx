import React, {useState, useEffect} from 'react';
import './Header.css';
import Menu from './Menu';

// interface IHeaderProps {
//   tagggSelection: Function
// };


// const Header: React.FunctionComponent <IHeaderProps> = ({ 
//   tagggSelection,
// }: IHeaderProps): JSX.Element => {
  function Header(): JSX.Element {
    // const taggSelection = (tag: string): void => {
    //   tagggSelection(tag);
    //   console.log("Head");
    //     console.log(tag);

    // };
    const handleTag = (tag: string) => {};

return (
    <>
      <div className='navbar'>
        <h2>Tiny Blog&nbsp;&nbsp;</h2>
        {/* <Menu taggSelection={taggSelection}/> */}
        <Menu handleTag={handleTag}/>
      </div>
    </>
  );
}
export default Header;