import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';
import HomePage from '../src/pages/HomePage/HomePage';
import UploadPage from '../src/pages/UploadPage/UploadPage';


function App() {
  return (
    <Router>
      <PageHeader />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/upload' component={UploadPage}/>
        <Route path='/:videoId' component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
