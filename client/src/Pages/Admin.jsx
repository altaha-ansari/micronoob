import React from "react";
import "../static/contact.css";
import "../static/admin.css";
function Admin() {
  const post = () => {
    var Author = document.getElementById("author").value;
    var Title = document.getElementById("title").value;
    var Body = document.getElementById("msg").value;
    var Tags = document.getElementById("tags").value;
    var Post_num = document.getElementById("post_num").value;
    var Image_url = document.getElementById("link").value;
    if (
      Author !== "" &&
      Title !== "" &&
      Body !== "" &&
      Tags !== "" &&
      Post_num !== "" &&
      Image_url !== ""
    ) {
      fetch("/api/Posts/", {
        method: "POST",
        body: JSON.stringify({
          Author: Author,
          Title: Title,
          Body: Body,
          Tags: Tags,
          Post_num: Post_num,
          Image_url: Image_url
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json));
    }
  };
  const delete_post = () => {
    var post_delete_num = document.getElementById("delete_post_num").value;
    if (post_delete_num !== "") {
      fetch(`/api/Posts/${post_delete_num}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json));
    }
  };

  const delete_comment = () => {
    var post_comment_num = document.getElementById("delete_comment_num").value;
    var post_comment_id = document.getElementById("delete_comment_id").value;
    if (post_comment_num !== "") {
      fetch(`/api/comments/${post_comment_num}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json));
    }
    if (post_comment_id !== "") {
      fetch(`/api/comments/${post_comment_id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json));
    }
  };

  return (
    <>
      {/* <label>
        <h2>Contact us</h2>
      </label> */}
      <div id="description">
        <form>
          <label>Author</label>
          <br />
          <input type="text" required id="author" />
          <br />
          <label>Title</label>
          <br />
          <input type="text" required id="title" />
          <br />
          <label>Body</label>
          <br />
          <textarea name="body" id="msg" cols="30" rows="10"></textarea>
          <br />
          <label>Tags</label>
          <br />
          <input type="text" required id="tags" />
          <br />
          <label>Post Number</label>
          <br />
          <input type="text" required id="post_num" />
          <br />
          <label>Image Link</label>
          <br />
          <input type="url" required id="link" />
          <br />
          <button onClick={e => post()}>Submit</button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <div id="description">
        <form>
          <label>Delete Post via post number</label>
          <br />
          <input type="number" required id="delete_post_num" />
          <br />
          <button onClick={e => delete_post()}>Delete</button>
        </form>
      </div>
      <br />
      <br />
      <br />
      <div id="description">
        <form>
          <label>Delete all Comments via post number</label>
          <br />
          <input type="number" required id="delete_comment_num" />
          <br />
          <button onClick={e => delete_comment()}>Delete</button>
          <br />
        </form>
        <form>
          <br />
          <label>Delete a Comment via _id number</label>
          <br />
          <input type="text" required id="delete_comment_id" />
          <br />
          <button onClick={e => delete_comment()}>Delete</button>
        </form>
      </div>
    </>
  );
}

export default Admin;
