import './App.css';
import { Navbar } from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Skills } from './Skills';
import { Sidebar } from './Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
        </Switch>
        <Sidebar/>
      </div>
    </Router>
  );
}

export default App;
