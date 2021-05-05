import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getToken } from "./actions/sessions";
import { setCurrentUser } from "./actions/users";
import "./stylesheets/App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Todos from "./pages/Todos";
import { getTodos } from "./actions/todos";

function App({ getToken, setCurrentUser }) {
  useEffect(() => {
    getToken();
    setCurrentUser();
  }, [getToken, setCurrentUser]);

  return (
    <Router>
      <div className="bg-black md:w-3/5 m-auto">
        <Header />
        <div className="flex h-screen justify-center">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/todos">
              <Todos />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default connect(null, { getToken, setCurrentUser })(App);
