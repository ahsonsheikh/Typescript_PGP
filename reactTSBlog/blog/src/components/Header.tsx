import React from 'react';
import './Header.css';
import Menu from './Menu';
import { Blog } from '../models/blog.models';

interface IHeaderProps {
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>
};

//  function Header(): JSX.Element {
const Header: React.FunctionComponent<IHeaderProps> = ({
  setBlogs,
}: IHeaderProps): JSX.Element => {

  return (
    <>
      <div className='navbar'>
        <h1>Tiny Blog&nbsp;&nbsp;</h1>
        <Menu setBlogs={setBlogs} />
      </div>
    </>
  );
}
export default Header;