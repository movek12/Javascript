import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
       //this.changeName = this.changeName.bind(this);
        this.state = {
            fullName: "Becky Johns",
        };
    } 
    changeName = () => {
        console.log(this, "this");
        this.setState({fullName : "Ram Gopal Varma"});
    }
  render() {
    return (
        //React.Fragment: now no need of an extra div,which is not allowed by js.
        <>
    <div>{this.state.fullName}</div>
    <button onClick={this.changeName}>Change Name</button>
    </>
    );
  }
}
