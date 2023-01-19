import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ListBlogs from './components/ListBlogs';
import { Blog } from './models/blog.models';
import data from './db.json';

function App(): JSX.Element {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  
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
      <Header />
      <div className="container">
      <ListBlogs blogs={blogs} setBlogs={setBlogs} />
      </div>
    </>
  );
}

export default App;