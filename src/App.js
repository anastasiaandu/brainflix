import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Main} />
        {/* <Route /> */}
        <Route path='/:videoId' component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
