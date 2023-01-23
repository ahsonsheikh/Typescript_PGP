import React from 'react';
import { Blog } from '../models/blog.models';
import Blogs from './Blogs';
import '../App.css';
interface IListBlogsProps {
  blogs: Blog[],
};

const ListBlogs: React.FunctionComponent<IListBlogsProps> = ({ blogs }) => {

  return (
    <>
      <h2 className="mt-4">Blogs</h2>
      <div>
        {blogs.map(blog => <Blogs key={blog.id} blog={blog} />)}
      </div>
    </>
  );
}
export default ListBlogs;