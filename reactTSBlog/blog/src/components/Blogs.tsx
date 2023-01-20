import { Blog } from '../models/blog.models';
import './Blogs.css';
import Menu from './Menu';

interface IBlogsProps {
  blog: Blog
};

const Blogs: React.FunctionComponent<IBlogsProps> = ({ blog }) => {
  const renderTags = blog.tags.map((tag) => tag.toString().toUpperCase());
  return (
    <>
      <div className='navbar'>
        <h2>Tiny Blog&nbsp;&nbsp;</h2>
        <Menu />
      </div>
      <div className='blogs-container'>
        <h3>{blog.title}</h3>
        <p className="text-light"> {blog.body} </p>
        <h3>Tags:</h3> <h5>{renderTags.map((tag) => <div>{tag.toUpperCase()}</div>)}</h5>
      </div>
    </>
  );
}
export default Blogs;