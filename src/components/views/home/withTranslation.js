import { withTranslation } from 'react-i18next';
import React, { Component } from "react";

class TestWithTranslation extends Component {
  state = {  }
  render() {
    const { t } = this.props;
    return (
      <p>{t('nav-games')}</p>
    );
  }
}
 
export default withTranslation()(TestWithTranslation);
