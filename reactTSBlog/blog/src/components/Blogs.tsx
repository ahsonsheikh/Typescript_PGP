import React from 'react';
import { Blog } from '../models/blog.models';
import './Blogs.css';

interface IBlogsProps {
  blog: Blog
};

const Blogs: React.FunctionComponent<IBlogsProps> = ({ blog }) => {
  const renderTags = blog.tags.map((tag) => tag.toString().toUpperCase());

  return (
    <>
      <div className='blogs-container'>
        <h3>{blog.title}</h3>
        <p className="text-light"> {blog.body} </p>
        {/* <h3>Tags:</h3><h5>{renderTags.map((tag) => <div>{tag.toUpperCase()}</div>)}</h5> */}
        <h3>Tags:</h3>
        <h5>{renderTags.map((renderTag, index) => (
          <li key={index}>{renderTag}</li>
        ))}
        </h5>
      </div>
    </>
  );
}
export default Blogs;