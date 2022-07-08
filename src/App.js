import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import PageHeader from './components/PageHeader/PageHeader';
import HomePage from './components/HomePage/HomePage';
import UploadPage from './components/UploadPage/UploadPage';


function App() {
  return (
    <Router>
      <PageHeader />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/:videoId' component={HomePage} />
        <Route path='/upload' component={UploadPage}/>
      </Switch>
    </Router>
  );
}

export default App;
