import { Blog } from '../models/blog.models';
import './Blogs.css';

// {blogs.map(blog => <Blogs key={blog.id} blog={blog} handleDelete={handleDelete} />)}
interface IBlogsProps {
    blog: Blog,
    handleDelete: (id: number) => void
};

const Blogs: React.FunctionComponent<IBlogsProps> =({blog, handleDelete}) => {
  //const renderTags = blog.tags.map((tag) => <div>{tag}</div>);
  return (
    <>
    <div className= 'blogs-container'>
       <h3>Blog: {blog.id}</h3>
       <h3>Title: {blog.title}</h3>
       <p className="text-light"> {blog.body} </p>
       <h3>Tags:</h3>
       {/* <p>{renderTags}</p> */}
       <h3>Reactions: {blog.reactions}</h3>
       <h3>User Id: {blog.userId}</h3>
       <button className='blogs-btn' onClick={()=> handleDelete(blog.id)}>Delete</button>
       {/* <button className='blogs-btn' onClick={()=> handleUpdate(blog.id)}>Update</button> */}
       </div>
    </>
  );
}

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

//Get
// fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(console.log);

//Get One
// fetch('https://dummyjson.com/posts/1')
// .then(res => res.json())
// .then(console.log);

//Add
// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     /* other product data */
//   })
// })
// .then(res => res.json())
// .then(console.log);

//Search
// fetch('https://dummyjson.com/posts/search?q=love')
// .then(res => res.json())
// .then(console.log);

// /* getting posts of user with id 5 */
// fetch('https://dummyjson.com/posts/user/5')
// .then(res => res.json())
// .then(console.log);


// fetch('https://dummyjson.com/posts/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'I am in love with someone.'
//     userId: 5,
//     /* other post data */
//   })
// })
// .then(res => res.json())
// .then(console.log);

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

// fetch('https://dummyjson.com/posts/1', {
//   method: 'DELETE',
// })
// .then(res => res.json())
// .then(console.log);

export default Blogs;