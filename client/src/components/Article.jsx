import React, { useState, useEffect } from "react";

function Card({ content }) {
  return (
    <React.Fragment>
      <section id='article'>
        <div id='container'>
          <address>
            <h2>Author@</h2>
            <h3>{content.Author}</h3>
            <p>{content.Date}</p>
          </address>
          <br />
          <br />
          <h1>{content.Title}</h1>
          <img
            src={`/Post_${content.Post_num}.jpg`}
            alt='loading'
            height='600'
            width='800'
          />
          <br />
          <br />
          <article>{content.Body}</article>
          <br />
          <br />
        </div>
      </section>
    </React.Fragment>
  );
}

function Article({ id }) {
  const [post, updatePost] = useState([]);
  useEffect(() => {
    async function fetchArticle() {
      try {
        let post = await fetch(`/api/Posts/${id}`);
        let postJson = await post.json();
        updatePost(postJson);
      } catch (err) {
        console.log(err);
      }
    }
    fetchArticle();
  }, []);
  return (
    <>
      <Card key={1} index={1} content={post} />
    </>
  );
}

export default Article;
