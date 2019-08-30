import React from "react";

function Header() {
  const setSearchKeywordURI = () => {
    let searhKeyword = document.getElementById("searchinput").value;
    let URIElement = document.getElementById("searchURI");
    URIElement.setAttribute("href", `/Search/${searhKeyword}`);
  };
  return (
    <React.Fragment>
      <header>
        <a href='/'>
          <div id='brand'>
            <img src='/mob2.png' height='70' width='70' alt='logo' />
            <h1>MicroNoob</h1>
          </div>
        </a>
        <div id='search'>
          <input id='searchinput' inputMode='text' type='search' required />
          <a id='searchURI' href='/Search/'>
            <button onClick={e => setSearchKeywordURI()}>SEARCH</button>
          </a>
        </div>
      </header>
      <br />
      <br />
    </React.Fragment>
  );
}

export default Header;
