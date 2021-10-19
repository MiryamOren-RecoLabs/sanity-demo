import './App.css';
import sanityClient from "@sanity/client";
import React, { useState, useEffect } from 'react';
import config from './config'
import PostBox from './post-box'

const client = sanityClient(config);

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    try{
      const query = "*[_type == 'post']"
      client.fetch(query).then((data) => {
        setPosts(data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])
  
  
  return (
    <div className="App">
      <header className="header">
        <h1> Wellcome to my Sanity sandbox blog!</h1>
        <p>
          <a href="https://recolabs.atlassian.net/wiki/spaces/DIAR/blog/2021/10/19/658145283/Miryam+Work+Blog+20210119" target="_blank" rel="noreferrer"> Tutorial </a> | 
          <a href="https://miryamoren.sanity.studio/desk" target="_blank" rel="noreferrer"> Studio </a> | 
          <a href="https://github.com/MiryamOren-RecoLabs/Sanity-Demo" target="_blank" rel="noreferrer"> Code </a> 
        </p>
      </header>
      <div className="main">
        {posts.map((post, indx) => <PostBox key={indx} {...post}/>)}
      </div>
    </div>
  );
}

export default App;
