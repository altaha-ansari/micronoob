import React, { useState, useEffect } from "react";

function Card({ content, index }) {
  return (
    <a
      href={`/Article/${index + 1}`}
      style={{ color: "black", textDecoration: "none" }}>
      <div className='card'>
        <address>
          <span>Author:</span>
          <span>{content.Author}</span>
          <span>{content.Date}</span>
        </address>
        <img
          src={`/Post_${content.Post_num}.jpg`}
          alt='loading'
          width='400'
          height='300'
        />
        <br />
        <article>
          <h2>{content.Title}</h2>
          <p>{content.Body}</p>
        </article>
      </div>
    </a>
  );
}

let postSkip = 0;
function HomeCards() {
  const [posts, addPosts] = useState([]);
  useEffect(() => {
    async function fetchPost() {
      try {
        let posts = await fetch(`/api/Posts/Limited/2/${postSkip}`);
        let postsJson = await posts.json();
        addPosts(postsJson);
      } catch (err) {
        console.log(err);
      }
    }
    fetchPost();
  }, []);

  const addMorePosts = async () => {
    postSkip += 2;
    try {
      let ExtraPosts = await fetch(`/api/Posts/Limited/2/${postSkip}`);
      let ExtraPostsJson = await ExtraPosts.json();
      let EPJLength = await ExtraPostsJson.length;
      if (EPJLength !== 0)
        addPosts([...posts, ExtraPostsJson[0], ExtraPostsJson[1]]);
      else postSkip -= 2;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <section id='content'>
        {posts.map((c, i) => (
          <Card key={i} index={i} content={c} />
        ))}
        <br />
        <br />
        <div id='VMore'>
          <button id='VMButton' onClick={e => addMorePosts()}>
            View More
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HomeCards;