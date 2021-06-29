import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import MKhome from "./components/MKhome";
import Mknavbar from "./components/MKnavbar";

function App() {

  return (
      <div className="container-fluid">
      <Mknavbar />
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/posts" exact component={Posts} />
                    <Route path="/home" exact component={MKhome} />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
