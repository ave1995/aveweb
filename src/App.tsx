import './css/App.css';
import { Navbar } from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Skills } from './Skills';
import { Sidebar } from './Sidebar';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main">
          <div className="inline">
            <Sidebar />
          </div>
          <div className="inline">
            <div className="switch">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
