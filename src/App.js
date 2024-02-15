import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FAQPage from './components/Faq';
import Home from './components/Home/index'
import Login from './components/Login';
import NotFound from './components/NotFound';


import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={FAQPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
