import React, { Component } from 'react';
import './cardpost.css';
class Cardpost extends Component {
  render() {
    const { title, fecha, image, text } = this.props.post
    return (
      <div className="card-post-container flex--row">
        <div className="post-image">
          <img src={image} alt=""/>
        </div>
        <div className="post-info">
          <h2>{title}</h2>
          <p className="post-fecha">{fecha}</p>
          <p className="post-text">{text}</p>
        </div>
      </div>
    );
  }
}

export default Cardpost;