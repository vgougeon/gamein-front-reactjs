import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import './search-bar.scss';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const { t } = this.props;
    return (  
      <div id="search">
        <i className="fas fa-search" />
          <input type="search" placeholder={t('search')} />
      </div>
    );
  }
}
 
export default withTranslation()(SearchBar);