import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch, withRouter,
} from 'react-router-dom';
import PageOptions from '../components/PageOptions';
import Members from '../components/Members';
import RequestMember from '../components/RequestMember';

const pageOptions = [
  { route: '/members', component: Members,  label: 'All', active: 0 },
  { route: '/members/request', component: RequestMember, label: 'Request Member', active: 0 },
];

class MembersPage extends Component {
  state = {
    route: this.props.location.pathname,
    component: Members
  }

  componentDidMount = () => {
    const curRoute = this.props.location.pathname;
    const curOption = pageOptions.filter((option) => option.route === curRoute)[0];
    this.setState({
      route: curOption.route,
      component: curOption.component,
    })
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

export default withRouter(MembersPage);
