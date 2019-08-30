import React, { useState, useEffect } from "react";

function CommentDisplay({ cmntData }) {
  return (
    <div id='cmntDisplay'>
      <label>{cmntData.Email}</label>
      <p>{cmntData.Comment}</p>
    </div>
  );
}

function Comment({ id }) {
  useEffect(() => {
    async function fetchComments() {
      try {
        let comments = await fetch(`/api/Comments/${id}`);
        let commentsJson = await comments.json();
        updateCmntState(commentsJson);
      } catch (err) {
        console.log(err);
      }
    }
    fetchComments();
  }, []);

  const [cmnt, updateCmntState] = useState([]);

  const addComment = async () => {
    try {
      var comment = document.getElementById("cmmnt").value;
      var email = document.getElementById("email").value;
      if (comment !== "" && email !== "") {
        let newComment = await fetch(`/api/Comments/${id}`, {
          method: "POST",
          body: JSON.stringify({
            Email: email,
            Comment: comment
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
        let newCommentJson = await newComment.json();
        updateCmntState([...cmnt, newCommentJson]);
      }
      document.getElementById("cmmnt").value = "";
      document.getElementById("email").value = "";
      document.getElementById("view").scrollIntoView();
    } catch (err) {
      console.log(err);
    }
  };
  let binaryClickCount = true;
  const displayComments = () => {
    let comments = document.getElementById("panel");
    let display = binaryClickCount ? "block" : "none";
    if (comments !== null) comments.style.display = display;
    binaryClickCount = !binaryClickCount;
  };

  return (
    <>
      <div id='unfoldComments' onClick={e => displayComments()}>
        <span>Comments</span>
        <img
          src='/icons8-pull-down-64.png'
          alt='drop-down'
          width='40'
          height='40'
        />
      </div>

      <div id='panel' style={{ display: "none" }}>
        <br />
        <br />
        <section id='commentInput'>
          <div className='container'>
            <input
              type='email'
              inputMode='email'
              id='email'
              name='email'
              placeholder='enter your email'
              required
            />
            <textarea
              type='text'
              id='cmmnt'
              name='cmnt'
              placeholder='write your comment'
              required
            />
            <button onClick={e => addComment()}>Submit</button>
          </div>
        </section>

        {cmnt.map((c, i) => (
          <CommentDisplay key={i} index={i} cmntData={c} />
        ))}

        <div id='view' />
      </div>
    </>
  );
}

export default Comment;
