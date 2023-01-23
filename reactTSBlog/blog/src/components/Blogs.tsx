import React, { useState } from 'react';
import { Blog } from '../models/blog.models';
import './Blogs.css';
import Menu from './Menu';
import data from '../db.json';

interface IBlogsProps {
  blog: Blog
  // handleTag: (id:string) => void
};

const Blogs: React.FunctionComponent<IBlogsProps> = ({ blog }) => {
  const [selectTag, setSelectTag] = useState<string>("");
  const renderTags = blog.tags.map((tag) => tag.toString().toUpperCase());
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const tagSelection = (tag: string): void => {
    setSelectTag(tag);
    
    const dataa: Blog[] = data.filter((dta) => dta.tags.includes(tag.toLowerCase()));  
    setBlogs(dataa);
    
  };

  
  return (
    <>
      {/* <div className='navbar'> */}
        {/* <h2>Tiny Blog&nbsp;&nbsp;</h2> */}
        {/* <Menu taggSelection={tagSelection}/> */}
        {/* <Menu /> */}
      {/* </div> */}
      
      <div className='blogs-container'>
        <h3>{blog.title}</h3>
        <p className="text-light"> {blog.body} </p>
        <h3>Tags:</h3> <h5>{renderTags.map((tag) => <div>{tag.toUpperCase()}</div>)}</h5>
      </div>
    </>
  );
}
export default Blogs;