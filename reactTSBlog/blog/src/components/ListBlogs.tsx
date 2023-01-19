import React from 'react';
import { Blog } from '../models/blog.models';
import Blogs from './Blogs';
// import './ListBlogs.css';
// import Menu from './Menu';

// <ListBlogs blogs={blogs} setBlogs={setBlogs} />
interface IListBlogsProps {
  blogs: Blog[],
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>
};

const ListBlogs: React.FunctionComponent<IListBlogsProps> = ({ blogs, setBlogs }) => {
  
  return (
    <>
      <h2 className="mt-4">Blogs</h2>
      <div>
        {/* {blogs.map(blog => <div><h2> {blog.id}</h2><h3> {blog.title}</h3><p>{blog.body}</p></div>)} */}
        {blogs.map(blog => <Blogs key={blog.id} blog={blog}/>)}
        
      </div>
    </>
  );
}
export default ListBlogs;