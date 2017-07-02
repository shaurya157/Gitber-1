import React from 'react';
import OrganizationSearch from '../organization_search/organization_search';
import UserSearch from '../user_search/user_search';
import Repository from '../repository/repository';
import User from './user';
import Organization from './org'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = 'app-container'>
                <UserSearch requestUser={this.props.requestUser}
                            requestUserRepos={this.props.requestUserRepos}/>
                <OrganizationSearch requestOrganization={this.props.requestOrganization}/>
                <User user={this.props.user} />
                <Organization org={this.props.organization}
                              requestUser={this.props.requestUser}/>
                <Repository repos={this.props.repos}
                            user={this.props.user}/>
      </div>
    )
  }
}

export default App;
