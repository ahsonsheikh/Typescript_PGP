import React from 'react';
import { Blog } from '../models/blog.models';
import Blogs from './Blogs';
// import './ListBlogs.css';
// import Menu from './Menu';

interface IListBlogsProps {
  blogs: Blog[],
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>
  // sTag: string
};

const ListBlogs: React.FunctionComponent<IListBlogsProps> = ({ blogs, setBlogs }) => {
  
  const handleTag = (tag: string) => {
    const dataa: Blog[] = blogs.filter((blg) => blg.tags.includes(tag.toLowerCase()))
    setBlogs(dataa);
  };
  
  return (
    <>
      <h2 className="mt-4">Blogs</h2>
      <div>
        {/* {blogs.map(blog => <div><h2> {blog.id}</h2><h3> {blog.title}</h3><p>{blog.body}</p></div>)} */}
        {/* {blogs.map(blog => <Blogs key={blog.id} blog={blog}/>)} */}
        {/* {blogs.map(blog => <Blogs blog={blog}/>)} */}
        {/* {blogs.map(blog => <Blogs key={blog.tags.filter(tg => tg !== tag)} blog= {blog} handleTag={handleTag} />)} */}
        {blogs.map(blog => <Blogs key={blog.id} blog= {blog} />)}
      </div>
    </>
  );
}
export default ListBlogs;