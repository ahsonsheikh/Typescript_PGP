// import { render } from '@testing-library/react';
import { Blog } from '../models/blog.models';
import './Blogs.css';

// {blogs.map(blog => <Blogs key={blog.id} blog={blog} handleDelete={handleDelete} />)}
interface IBlogsProps {
    blog: Blog,
};

const Blogs: React.FunctionComponent<IBlogsProps> =({blog}) => {
  const renderTags =  blog.tags.map((tag) => <div>{tag.toString().toUpperCase()}</div>);
  
  // const History =  blog.tags.map((tag) => <div>{tag.toString().toUpperCase()==='HISTORY'}</div>);
  // 👇️ check if array contains object


  // if(renderTags)
  // {
    return (
    <>
    <div className= 'blogs-container'>
       <h2>{blog.title}</h2>
       <p className="text-light"> {blog.body} </p>
       <h3>Tags: </h3>
       <p>{renderTags}</p>
       </div>
    </>
  );
// }
}

export default Blogs;