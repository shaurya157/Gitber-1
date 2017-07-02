import React from 'react';

class User extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let divStyleUser = {
      position: 'relative'
    }
    
    return(
      <div className='row-fluid' style={divStyleUser}>
        USER
      </div>
    )
  }
}

export default User;
