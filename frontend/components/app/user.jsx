import React from 'react';

class User extends React.Component {
  constructor(props){
    super(props);
    this.user = this.user.bind(this);
  }

  user(){
    if(this.props.user.username != ""){
      return (
        <div className='user-info'>
          USER INFO:
          <p>Name: {this.props.user.name}</p>
          <p>Username: {this.props.user.username}</p>
          <p>Joined: {this.props.user.created_at}</p>
          <p>Followers: {this.props.user.followers}</p>
          <a href={`http://github.com/${this.props.user.username}`}>Github</a>
        </div>
      )
    } else{
      return (
        <div></div>
      );
    }
  }

  render(){
    return(
      <div className='container-item'>
        {this.user() }
      </div>
    )
  }
}

export default User;
