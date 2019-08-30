import React from "react";
import "../static/contact.css";

function Contact() {
  const add = () => {
    var Firstname = document.getElementById("FName").value;
    var Lastname = document.getElementById("LName").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("msg").value;
    if (message !== "" && email !== "" && Firstname !== "" && Lastname !== "")
      fetch("/api/Contacts/", {
        method: "POST",
        body: JSON.stringify({
          FirstName: Firstname,
          LastName: Lastname,
          Email: email,
          Message: message
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => console.log(json));
    document.getElementById("FName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("LName").value = "";
    document.getElementById("msg").value = "";
  };

  return (
    <>
      <br />
      <section id='description'>
        <label>
          <h2>Contact us</h2>
        </label>
        <div id='info'>
          <p>
            Contact me for any query that you want to make, for removal of a
            post that you dislike, suggestions, removal of abusive comments or
            some correction. I will be trying my best to respond to your queries
            in affirmation. Thank you for your precious time!
          </p>
        </div>
        <br />
        <form>
          <div className='container'>
            <label> First Name </label>
            <input type='text' id='FName' />
            <label> Last Name </label>
            <input type='text' id='LName' />
            <br />
            <br />
            <label> Email </label>
            <input type='email' id='email' />
            <br />
            <br />
            <p>
              <label> Message</label>
            </p>
            <textarea type='text' id='msg' />
            <br />
            <br />
            <button onClick={e => add()}>SUBMIT</button>
          </div>
        </form>
      </section>
      <br />
    </>
  );
}

export default Contact;
