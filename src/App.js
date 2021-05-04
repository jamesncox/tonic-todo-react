import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getToken } from "./actions/sessions";
import { setCurrentUser } from "./actions/users";
import "./stylesheets/App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App(props) {
  useEffect(() => {
    props.getToken();
    props.setCurrentUser();
  }, []);

  return (
    <Router>
      <div className="h-screen bg-black md:w-3/5 m-auto">
        <Header />
        <div className="flex h-screen justify-center items-center -mt-32">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default connect(null, { getToken, setCurrentUser })(App);
