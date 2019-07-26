import React, { Component } from 'react';
import './img.scss';
class Img extends Component {
  state = { 
    loaded: false
  }

  onLoad = () => {
    this.setState({ loaded: true });
  };
  render() { 
    return ( 
      <img 
      className={ 'loadImg ' + (this.state.loaded ? "loaded" : "")}
      src={ this.props.src } 
      alt={ this.props.alt } 
      onLoad={ this.onLoad }
      />
    );
  }
}
 
export default Img;