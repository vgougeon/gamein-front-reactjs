import React, { Component } from "react";
import "./showMore.scss";

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
    return (
      <React.Fragment>
        <button
          className={(this.state.ready ? "ready " : "") + "mx-auto showMore"}
          onClick={this.props.action}
          style={{ marginBottom: this.state.spacing }}
        >
          Afficher plus
        </button>
      </React.Fragment>
    );
  }
}

export default ShowMore;
