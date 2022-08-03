import React, { Component } from 'react';

export default class Search extends Component {

  state = { name: ''};

   handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.name === ''){
        alert('Please give a name')
    } else {
        console.log('form submitted ', this.state.name)
    }
    
  };

  render() { 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"  onChange={this.handleChange}/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    );
  }

}