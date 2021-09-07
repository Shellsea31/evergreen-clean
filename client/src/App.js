// import logo from './logo.svg';
import "./App.css";
import Body from "./Pages/Body";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Faq from "./Pages/Faq";

function App() {
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
