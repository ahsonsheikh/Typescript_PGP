import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Blog } from './models/blog.models';
import data from './db.json';
// import Blogs from './components/Blogs';
import ListBlogs from './components/ListBlogs';

function App(): JSX.Element {

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectTag, setSelectTag] = useState ('');


  // useEffect(() => {
  //  fetch('https://dummyjson.com/posts')
  //   .then((response) => response.json())
  //   .then((json) => setBlogs( json['posts']))
  // //.then((json) => setBlogs( () => [...json.posts]))    
  //   .catch(error => console.log(error))
  //  },[])

  useEffect(() => {
    setBlogs(data);
  }, [])

  

  
  return (
    <>
      {/* <Header /> */}
      <Header />
      <div className="container">
        {/* <h2 className="mt-4">Blogs</h2> */}
        <div>
          {/* {blogs.map(blog => <Blogs key={blog.id} blog={blog}/>)} */}
          <ListBlogs blogs={blogs} setBlogs={setBlogs} />
        </div>
      </div>
    </>
  );
}

export default App;