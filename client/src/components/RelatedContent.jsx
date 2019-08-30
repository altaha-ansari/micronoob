import React, { useState, useEffect } from "react";

function MiniCard({ content }) {
  return (
    <React.Fragment>
      <a
        href={`/Article/${content.Post_num}`}
        style={{ color: "black", textDecoration: "none" }}>
        <div className='miniCard'>
          <img
            src={`/Post_${content.Post_num}.jpg`}
            alt='loading'
            width='200'
            height='150'
          />
          <h3> {content.Title} </h3>
        </div>
      </a>
      <br />
    </React.Fragment>
  );
}

function RelatedContent() {
  useEffect(() => {
    async function fetchRelatedContent() {
      try {
        let posts = await fetch("/api/Posts/Search/Database");
        let postsJson = await posts.json();
        addPosts(postsJson);
      } catch (err) {
        console.log(err);
      }
    }
    fetchRelatedContent();
  }, []);

  const [posts, addPosts] = useState([]);

  return (
    <React.Fragment>
      <section id='relatedContents'>
        <h2>Related</h2>
        {posts.map((c, i) => (
          <MiniCard key={i} content={c} />
        ))}
      </section>
      <br />
      <br />
    </React.Fragment>
  );
}

export default RelatedContent;
