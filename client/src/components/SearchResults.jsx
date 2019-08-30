import React, { useState, useEffect } from "react";
import "../static/SearchResults.css";

function ResStrip({ content }) {
  return (
    <div id='result'>
      <a
        href={"/Article/" + content.Post_num}
        style={{ color: "black", textDecoration: "none" }}>
        <h2>{content.Title}</h2>
      </a>
    </div>
  );
}

function SearchResults(props) {
  const [result, updateResult] = useState([]);
  useEffect(() => {
    async function fetchSearchResults() {
      try {
        let response = await fetch(
          `/api/Posts/Search/${props.match.params.keyword}`
        );
        let resJson = await response.json();
        updateResult(resJson);
      } catch (err) {
        console.log(err);
      }
    }
    fetchSearchResults();
  }, []);

  return (
    <React.Fragment>
      <div className='container'>
        {result.map((c, i) => (
          <ResStrip key={i} index={i} content={c} />
        ))}
      </div>
    </React.Fragment>
  );

  //   return <h1>{props.match.params.keyword}</h1>;
}

export default SearchResults;
