/* global React */
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useState } from "react";
import SearchParams from "./SearchParams.js";
import Details from "./Details.js";
import ThemeContext from "./ThemeContext.js";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
