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
    if(this.props.ratio === undefined){
      return ( 
        <img 
        className={ this.props.className + ' loadImg ' + (this.state.loaded ? "loaded" : "")}
        src={ this.props.src } 
        alt={ this.props.alt } 
        onLoad={ this.onLoad }
        />
      );
    } else {
      return (
        <div className="img-ratio">
          <div className="ratio-box">
            <img className="ratio" src={ this.props.src } alt={ this.props.alt } />
          </div> 
        </div>
      );
    }
  }
}
 
export default Img;