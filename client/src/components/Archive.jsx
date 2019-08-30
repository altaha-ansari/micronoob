import React, { useState, useEffect } from "react";
import "../static/archive.css";
const Strips = ({ content, index }) => {
  return (
    <h1>
      <a
        href={`/Article/${index}`}
        style={{ color: "rgb(50,50,50)", textDecoration: "none" }}>
        {content.Title}
      </a>
    </h1>
  );
};

function Archive() {
  const [posts, updatePosts] = useState([]);
  useEffect(() => {
    async function fetchArchive() {
      try {
        let posts = await fetch("/api/Posts/Limited/0/0");
        let postsJson = await posts.json();
        updatePosts(postsJson);
      } catch (err) {
        console.log(err);
      }
    }
    fetchArchive();
  }, []);

  return (
    <div id='archives'>
      {posts.map((c, i) => (
        <>
          <Strips key={i} content={c} index={i + 1} />
          <br />
        </>
      ))}
    </div>
  );
}

export default Archive;
