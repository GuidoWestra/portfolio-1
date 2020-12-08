import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
