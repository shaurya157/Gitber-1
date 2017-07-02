import React from 'react';

class OrganizationSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      organization: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({organization: e.target.value});
  }

  handleSubmit(e){
    this.props.requestOrganization(this.state.organization);
  }

  render(){
    return(
      <div className='container-item org-search'>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
                 placeholder='Enter Organization Name'
                 onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default OrganizationSearch
