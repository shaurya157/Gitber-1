import React from 'react';
import OrganizationSearch from '../organization_search/organization_search';
import UserSearch from '../user_search/user_search';
import Repository from '../repository/repository';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className = 'app-container'>
        <UserSearch />
        <OrganizationSearch />
        <Repository />
      </div>
    )
  }
}

export default App;
