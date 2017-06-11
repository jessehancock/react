import React, { Component } from 'react';
import Image1 from './img/Bert.png'
import './Bert.css';


const sesameStreet = [
  {
    name: "bert",
    image: {Image1},
    id: 1,
  },
  {
    name: "Ernie",
    image: "./img/Bert.png"
  },
  {
    name: "Trash Panda",
    image: {Image1}
  },
];



class Character extends Component {
constructor(props) {
  super(props)
  this.state = {
    data:sesameStreet[0]
  }
};
handleClick(index) {
  this.setState({activeIndex: index})
};
  render() {
    return (
      <div className="Bert">
        <div>
            <span className="list" onClick={console.log(this.state.data.image.Image + "1")}> Bert </span>
            <span className="list"> Ernie </span>
            <span className="list"> Cookie Moster </span>
            <span className="list"> The Count </span></div>
          <h3>{this.state.data.name}</h3>
        <img src={this.state.data.image.Image + this.state.data.id} alt="" className='bertImage'/>
      </div>
    );
  }
}

export default Character;
