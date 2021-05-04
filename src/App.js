import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getToken } from "./actions/sessions";
import { setCurrentUser } from "./actions/users";
import "./stylesheets/App.css";

import Header from "./components/Header";
import Home from "./pages/Home";

function App(props) {
  useEffect(() => {
    props.getToken();
    props.setCurrentUser();
  }, []);

  return (
    <Router>
      <div className="h-screen bg-black">
        <Header />
        <div className="flex justify-center pt-16">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default connect(null, { getToken, setCurrentUser })(App);
