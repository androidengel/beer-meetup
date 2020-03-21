import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Page from './Page';
import HomePage from '../pages/HomePage';
import BeersPage from '../pages/BeersPage';
import MeetingsPage from '../pages/MeetingsPage';
import MembersPage from '../pages/MembersPage';
import LoginPage from '../pages/LoginPage';
import AccountPage from '../pages/AccountPage';
import RegisterPage from '../pages/RegisterPage';

const HeaderWrapper = styled.div`
  height: 8rem;
`;

class App extends Component {
  state = {
    backendResponse: '',
  }

  // callBackend = () => {
  //   fetch('http://localhost:7777/test')
  //     .then(res => res.text())
  //     .then(res => this.setState({backendResponse: res}))
  // }

  // componentDidMount() {
  //   this.callBackend();
  // }

  render() {
    return (
      <BrowserRouter>
]        {/* <p>{this.state.backendResponse}</p> */}
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Page>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/beers" component={BeersPage} />
            <Route exact path="/meetings" component={MeetingsPage} />
            <Route path="/members" component={MembersPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/account" component={AccountPage} />
            <Route path="/register/:token" component={RegisterPage} />
          </Switch>
        </Page>
      </BrowserRouter>
    );
  }
}

export default App;
