import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import Header from './Header';
import Page from './Page';
import home from '../pages/home';
import beers from '../pages/beers';
import meetings from '../pages/meetings';
import members from '../pages/members';
import account from '../pages/account';
import RequestMember from './RequestMember';

class App extends Component {
  state = {
    backendResponse: '',
  }

  callBackend = () => {
    fetch('http://localhost:7777/test')
      .then(res => res.text())
      .then(res => this.setState({backendResponse: res}))
  }

  componentDidMount() {
    this.callBackend();
  }

  render() {
    return (
      <BrowserRouter>
        {/* <p>{this.state.backendResponse}</p> */}
        <Header />
        <Page>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/beers" component={beers} />
            <Route exact path="/meetings" component={meetings} />
            <Route exact path="/members" component={members} />
            <Route exact path="/members/request" component={RequestMember} />
            <Route exact path="/account" component={account} />
          </Switch>
        </Page>
      </BrowserRouter>
    );
  }
}

export default App;
