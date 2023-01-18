import { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css';
import Header from './components/Header';
import ListBlogs from './components/ListBlogs';
import { Blog } from './models/blog.models';
import dataa from './db.json';

function App() {
  // const [blogs, setBlogs] = useState<Blog[]>(
  //   [
  //     {
  //     "id": 1,
  //     "title": "His mother had always taught him",
  //     "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
  //     "userId": 9,
  //     "tags": ["history", "american", "crime"],
  //     "reactions": 2
  //     },
  //     {
  //     "id": 2,
  //     "title": "He was an expert but not in a discipline",
  //     "body": "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
  //     "userId": 13,
  //     "tags": ["french", "fiction", "english"],
  //     "reactions": 2
  //     }
  //   ]
  //  )

  const [blogs, setBlogs] = useState<Blog[]>([]);
  // const fetchData = () => {
  //   return axios.get('https://jsonplaceholder.typicode.com/posts')
  //   return axios.get('https://dummyjson.com/posts')
  //          .then((response) => setBlogs(response.data));
  // }

  // useEffect(() => {
  //  fetch('https://jsonplaceholder.typicode.com/posts')
  //  //fetch('https://dummyjson.com/posts')
  //   .then((response) => response.json())
  //   .then((data) => setBlogs( data ))  
  //   .catch(error => console.log(error))
  //  },[])

  useEffect(() => {
    setBlogs(dataa);
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
