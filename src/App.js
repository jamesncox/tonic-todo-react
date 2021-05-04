import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { getToken } from "./actions/sessions";
import { setCurrentUser } from "./actions/users";
import "./stylesheets/App.css";

function App(props) {
  return (
    <Router>
      <div className="App">
        <header className="App-header">Tonic Todo App</header>
      </div>
    </Router>
  );
}

export default connect(null, { getToken, setCurrentUser })(App);
