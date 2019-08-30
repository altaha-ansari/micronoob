import React from "react";
import About from "./Pages/About";
import HomeCards from "./components/HomeCards";
import SearchResults from "./components/SearchResults";
import ArticlePage from "./Pages/ArticlePage";
import Contact from "./Pages/Contact";
import Archive from "./components/Archive";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact component={HomeCards} />
          <Route path='/Article/:num' component={ArticlePage} />
          <Route path='/Search/:keyword' component={SearchResults} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Archive' component={Archive} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
