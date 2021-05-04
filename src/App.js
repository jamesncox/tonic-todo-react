import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getToken } from "./actions/sessions";
import { setCurrentUser } from "./actions/users";
import "./stylesheets/App.css";

import Home from "./pages/Home";

function App(props) {
  useEffect(() => {
    props.getToken();
    props.setCurrentUser();
  }, []);

  return (
    <Router>
      <div className="bg-black h-screen pt-4 pl-4">
        <header className="text-matrix-green text-2xl md:text-4xl font-bold font-mono">
          Wake up, Tonic...
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(null, { getToken, setCurrentUser })(App);
