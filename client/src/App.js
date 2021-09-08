// import logo from './logo.svg';
import "./App.css";
import Body from "./Pages/Body";
import axios from "axios";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Faq from "./Pages/Faq";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get("/example")
      .then((res) => {
        console.log(res.data.msg);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Body} />
          <Route path="/faq" component={Faq} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
