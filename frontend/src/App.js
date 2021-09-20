
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail'
export const config = {
  endpoint: "https://borderfreeassignment.herokuapp.com/items",
}


function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/items/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
