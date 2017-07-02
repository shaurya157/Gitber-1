import React from 'react';

class UserSearch extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        username: ""
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
      this.setState({username: e.target.value});
    }

    handleSubmit(e){
      this.props.requestUser(this.state.username);
      this.props.requestUserRepos(this.state.username);
    }

    render(){
      return(
        <div className='container-item'>
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Enter username' onChange={this.handleChange}/>
            <button>Submit</button>
          </form>
        </div>
      )
    }
}

export default UserSearch
