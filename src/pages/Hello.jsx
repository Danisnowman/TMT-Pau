import React, { Component } from "react";

import { Row } from "reactstrap";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    this.props.setUserId(this.state.value);
    console.info("A name was submitted: " + this.state.value);
    this.props.goToPage("menu");
    // event.preventDefault();
  }

  render() {
    return (
      <Row className="d-flex justify-content-center">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Row>
    );
  }
}

export default Hello;
