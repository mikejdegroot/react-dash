import React, { Component } from 'react';


class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {count : 0};
  }


  handleClick() {
    this.setState(prevState => ({count : prevState.count + 1}));
  }

  render() {
    return(
      <div>
        <h1> Hello </h1>
        <button onClick={()=> {this.handleClick()}}> Click state {this.state.count} </button>
      </div>
    )
  }
}



export default Home;
