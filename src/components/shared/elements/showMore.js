import React, { Component } from "react";
import "./showMore.scss";
import { withTranslation } from 'react-i18next';

class ShowMore extends Component {
  constructor(props) {
    super(props);
    this.state = { ready: false, spacing: this.props.spacing };
  }
  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ ready: true });
      }.bind(this),
      700
    );
  }
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <button
          className={(this.state.ready ? "ready " : "") + "mx-auto showMore"}
          onClick={this.props.action}
          style={{ marginBottom: this.state.spacing }}
        >
          {t('show-more')}
        </button>
      </React.Fragment>
    );
  }
}

export default withTranslation()(ShowMore);