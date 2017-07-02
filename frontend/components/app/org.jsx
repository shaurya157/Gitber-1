import React from 'react';

class Org extends React.Component {
  constructor(props){
    super(props);
    this.org = this.org.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.requestUser = this.props.requestUser.bind(this);
  }

  handleClick(e){
    this.requestUser(e.currentTarget.innerText);
  }

  org(){
    if(this.props.org.length != 0){
      return (
        <ul className='org-info'>
          {this.props.org.map((member, idx) => {
              return <li key={idx} onClick={this.handleClick}>{member.username}</li>
            })}
        </ul>
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
        {this.org()}
      </div>
    )
  }
}

export default Org;
