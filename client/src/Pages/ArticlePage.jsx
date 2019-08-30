import React from "react";
import Comment from "../components/Comment";
import Article from "../components/Article";
import RelatedContent from "../components/RelatedContent";

function ArticlePage(props) {
  return (
    <React.Fragment>
      <Article id={props.match.params.num} />
      <RelatedContent />
      <Comment id={props.match.params.num} />
    </React.Fragment>
  );
}

export default ArticlePage;
