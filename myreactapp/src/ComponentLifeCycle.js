// import React, { Component } from 'react'

// export default class ComponentLifeCycle extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {name: "Janvi"};
//     // }
//     //runs after constructor
//     // static getDerivedStateFromProps(props,state){
//     //   return {name: props.name1};
//     // }
//     // componentDidMount(){
//     //   setTimeout (() => {
//     //     this.setState({name: "Dharma"})
//     //   },1000);
//     // }
    
// //   render() {
// //     console.log(this, "this");
// //     return <>{this.state.name}</>;
// //   }
// constructor(props) {
//   super(props);
//   this.state = { color: "Red"}
// };
// shouldComponentUpdate () {
//   return true;
// }
// changeColor = () => {
//   this.setState({ color: "Blue"})
// };
//  getSnapshotBeforeUpdate(prevProps, prevState) {
//    document.getElementById("div1").innerHTML = "Before:" +prevState.color;
//  }
// render() {
//   console.log(this, "this");
//   return (
//     <>
//     {this.state.color}
//     <button onClick={this.changeColor}>Change Color</button>
//     <div id='div1'></div>
//     <div id='div2'></div>
//     </>
//   );
// }
// }

