import React, { Component } from "react";
import { Translation } from 'react-i18next';

class ClassTest extends Component {
  state = {  }
  render() {
    console.log(this.props) 
    return (  
      <Translation>
      {
        (t, { i18n }) => <p>{t('nav-games')}</p>
      }
      </Translation>
    );
  }
}
 
export default ClassTest;
