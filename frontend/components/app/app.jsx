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
                <UserSearch requestUser={this.props.requestUser}/>
                <OrganizationSearch requestOrganization={this.props.requestOrganization}/>
                <Repository />
                <User user={this.props.user} />
                <Organization org={this.props.organization}
                              requestUser={this.props.requestUser}/>
      </div>
    )
  }
}

export default App;
