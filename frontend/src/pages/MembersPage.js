import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import PageOptions from '../components/PageOptions';
import Members from '../components/Members';
import RequestMember from '../components/RequestMember';

const pageOptions = [
  { route: '/members', component: Members,  label: 'All', active: 0 },
  { route: '/members/request', component: RequestMember, label: '+Request Member', active: 0 },
];

class MembersPage extends Component {
  state = {
    route: '/members',
    component: Members
  }

  optionClicked = (route, component) => {
    this.setState({
      route,
      component,
    })
  }

  render() {
    return (
      <BrowserRouter>
        <PageOptions options={pageOptions} optionClicked={this.optionClicked} />
        <Switch>
          <Route path={this.state.route} component={this.state.component} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default MembersPage;
