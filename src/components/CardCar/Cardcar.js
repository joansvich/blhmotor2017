import React, { Component } from 'react';
import './cardcar.css';

class Cardcar extends Component {
  render() {
    const { model, image, price } = this.props.car
    return (
      <div className="card-car-container">
        <img src={image} alt=""/>
        <h3>{price} €</h3>
        <h1>{model}</h1>
        <div className="buttons-contact">
          <span className="button-more"><svg version="1.1" id="Capa_1"
    viewBox="0 0 60 60">
  <g>
    <path d="M8,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S12.411,22,8,22z"/>
    <path d="M52,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S56.411,22,52,22z"/>
    <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"/>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg></span>
          <span className="button-mail"><svg version="1.1" id="Capa_1"
	 viewBox="0 0 14 14">
<g>
	<g>
		<path  d="M7,9L5.268,7.484l-4.952,4.245C0.496,11.896,0.739,12,1.007,12h11.986
			c0.267,0,0.509-0.104,0.688-0.271L8.732,7.484L7,9z"/>
		<path  d="M13.684,2.271C13.504,2.103,13.262,2,12.993,2H1.007C0.74,2,0.498,2.104,0.318,2.273L7,8
			L13.684,2.271z"/>
		<polygon  points="0,2.878 0,11.186 4.833,7.079 		"/>
		<polygon  points="9.167,7.079 14,11.186 14,2.875 		"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg></span>
        </div>
      </div>
    );
  }
}

export default Cardcar;