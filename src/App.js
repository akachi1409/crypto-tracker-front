import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch ,
  Route,
} from "react-router-dom";
import Search from './component/Search/Search';
import SearchResult from './component/Search/SearchResult';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/search" component={Search}/>
          <Route path="/result" component={SearchResult}/>
        </Switch>
      </Router>
  );
}

export default App;
