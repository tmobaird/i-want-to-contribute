import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import '../styles/search-bar.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <Row>
        <form onSubmit={this.handleSubmit}>
          <input
            id="search-bar"
            type="text"
            placeholder="ex. react_on_rails"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <Col md={6} mdOffset={3}>
            <Button
              className="center-block"
              type="submit"
              bsStyle="primary"
              block
            >
              Search
            </Button>
          </Col>
        </form>
      </Row>
    );
  }
}
