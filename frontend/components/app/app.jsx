import React from 'react';
import OrganizationSearch from '../organization_search/organization_search';
import UserSearch from '../user_search/user_search';
import Repository from '../repository/repository';
import User from './user'

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let divStyle1 = {
      position: 'fixed',
      textAlign: 'center',
    }

    let divStyle2 = {
      textAlight: 'center'
    }
    return(
      <div className = 'app-container'>
        <div className="gitber container" id="tagHeading"
            style={ divStyle1 }
            data-0="margin-top:-50px;"
            data-anchor-target="#fitHeader"
            data-50-top-bottom="margin-top:-50px;"
            data--250-top-bottom="margin-top:0px;">
				      <p>GitBer!</p>
      	</div>

        <div className='container'>
          <div className="row-fluid" style={divStyle2}>
                <p className="gitber" id="fitHeader">
                  <span id="gitber1">G</span>
                  <span id="gitber2">i</span>
                  <span id="gitber3">t</span>
                  <span id="gitber4">B</span>
                  <span id="gitber5">e</span>
                  <span id="gitber6">r</span>
                  <span id="gitber7">!</span>
                  <span id="gitber8">
                    <i className="icon-github"></i>
                  </span>
                </p>
          </div>

          <div className="row-fluid">
            <div className="span4">
              <div>
                <UserSearch />
                <OrganizationSearch />
                <Repository />
                <User user={this.props.user} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
