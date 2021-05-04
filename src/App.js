import { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getToken } from "./actions/sessions";
import { setCurrentUser } from "./actions/users";
import "./stylesheets/App.css";

function App(props) {
  useEffect(() => {
    props.getToken();
    props.setCurrentUser();
  }, []);

  return (
    <Router>
      <div className="bg-black h-screen pt-4 pl-4">
        <header className="text-matrix-green text-4xl font-bold font-mono">
          Wake up, Neo...
        </header>
      </div>
    </Router>
  );
}

export default connect(null, { getToken, setCurrentUser })(App);
