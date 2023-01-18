import React from 'react';
import { Blog } from '../models/blog.models';
import Blogs from './Blogs';
// import './ListBlogs.css';

// <ListBlogs blogs={blogs} setBlogs={setBlogs} />
interface IListBlogsProps {
  blogs: Blog[],
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>
};

const ListBlogs: React.FunctionComponent<IListBlogsProps> = ({ blogs, setBlogs }) => {
  
  const handleDelete = (id: number) => {
    // fetch('https://dummyjson.com/posts/', {method: 'DELETE', })
    // .then(res => res.json())
    // // .then(console.log);
    setBlogs(blogs.filter(blog => blog.id !== id));
    

  }
  // 

// const handleUpdate = (id: number) => setBlogs(blogs.filter(blog => blog.id !== id))

// /* updating title of post with id 1 */
// fetch('https://dummyjson.com/posts/1', {
//   method: 'PUT', /* or PATCH */
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'I think I should shift to the moon',
//   })
// })
// .then(res => res.json())
// .then(console.log);
  return (
    <>
      <h2 className="mt-4">Blogs</h2>
      <div>
        {/* {blogs.map(blog => <div><h2> {blog.id}</h2><h3> {blog.title}</h3><p>{blog.body}</p></div>)} */}
        {blogs.map(blog => <Blogs key={blog.id} blog={blog} handleDelete={handleDelete} />)}
      </div>
    </>
  );
}
export default ListBlogs;