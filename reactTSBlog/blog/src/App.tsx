import { useEffect, useState } from 'react';
import './App.css';
import { Blog } from './models/blog.models';
import Header from './components/Header';
import data from './db.json';
import ListBlogs from './components/ListBlogs';
import Menu from './components/Menu';

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
      <Header setBlogs={setBlogs} />
      <Menu setBlogs={setBlogs} />
      <div className="container">
        <ListBlogs blogs={blogs} />
      </div>
    </>
  );
}

export default App;