import React from "react";

function NavBar() {
  return (
    <React.Fragment>
      <div>
        <a href='/'>
          <button>Home</button>
        </a>
        <a href='/Archive'>
          <button>Archive</button>
        </a>
        <a href='/About'>
          <button>About</button>
        </a>
        <a href='/Contact'>
          <button>Contact</button>
        </a>
      </div>
    </React.Fragment>
  );
}

export default NavBar;
