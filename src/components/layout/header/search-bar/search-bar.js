import React, { Component } from 'react';
import './search-bar.scss';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      <div id="search">
        <i className="fas fa-search" />
          <input type="search" placeholder='Rechercher...' />
      </div>
    );
  }
}
 
export default SearchBar;