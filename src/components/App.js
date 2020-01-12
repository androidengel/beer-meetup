import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Page from './Page';
import home from '../pages/home';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Page>
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
      </Page>
    </BrowserRouter>
  );
}

export default App;
