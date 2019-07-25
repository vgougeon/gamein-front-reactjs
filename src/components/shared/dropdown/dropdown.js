import React, { Component, useRef, useEffect } from 'react';
import './dropdown.scss';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className={ 's-1 dropdown ' + (this.props.show ? 'open' : '')} style={{top: this.props.top}}>
      { this.props.children }
    </div>
    );
  }
}
 
export default Dropdown;