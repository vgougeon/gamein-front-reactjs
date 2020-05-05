import React, { Component } from 'react';
import './dropdown.scss';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps.show !== this.props.show && this.props.show === true){
      console.log("added")
      document.addEventListener('mousedown', this.handleClick, false);
    }
    else {
      console.log("removed")
      document.removeEventListener('mousedown', this.handleClick, false) 
    }
  }
  componentWillUnmount() {
    console.log("removed event")
    document.removeEventListener('mousedown', this.handleClick, false) 
  }
  handleClick = (e) => {
    if(this.node.contains(e.target)) {
      return
    }
    this.props.toggle()
  }
  render() { 
    return ( 
      <div ref={node => this.node = node} className={ 'dropdown ' + (this.props.show ? 'open' : '')} style={{top: this.props.top}}>
      { this.props.children }
      </div>
    );
  }
}
 
export default Dropdown;