import React, { Component } from 'react'
import "./style.css";
// binding { }
export default class DataBinding extends Component {
    // thuộc về class ( component)
    title = "Profile User";
    renderButton = () => { 
        return <button className='btn btn-secondary'>Logout</button>
     }
  render() {
    // thuộc về function
    let userName = "Alice";
    return (
      <div className='  container display-4'>
        <p>DataBinding</p>
        <p className='title'>Hello {userName}</p>
        <h2>{this.title} Khánh </h2>
        {this.renderButton()}
       
      </div>
    )
  };
}
