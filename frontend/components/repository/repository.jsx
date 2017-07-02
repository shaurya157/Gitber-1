import React from 'react';

class Repository extends React.Component{
    constructor(props){
      super(props);
      this.repos = this.repos.bind(this);
    }

    repos(){
      if(this.props.user.username != ""){
        return (
          <ul className='repos-info'>
            {this.props.repos.map((repo, idx) => {
                let link = `http://github.com/${this.props.user.username}/${repo.name}`
                return <li key={idx}>
                        <a href={link}>{repo.name}</a>
                      </li>
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
          {this.repos()}
        </div>
      )
    }
}

export default Repository
