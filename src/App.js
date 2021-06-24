import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
       <BrowserRouter>
           <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/competences" component={Knowledges} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contacts" component={Contacts} />
                <Route component={NotFound} />
            </Switch>
       </BrowserRouter>
    </>
  );
};

export default App;