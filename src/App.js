import "./App.css";
import AddPost from "./AddPost";
import Login from "./Login";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <AddPost />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
