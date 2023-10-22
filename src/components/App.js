import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';


import blogData from "../data/blog";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image="https://via.placeholder.com/215" about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
} 

export default App;


