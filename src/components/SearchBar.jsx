import React from 'react';
import { Glyphicon, OverlayTrigger, Popover } from 'react-bootstrap';
import '../styles/search-bar.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };

    this.updateFocus = this.updateFocus.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // This prevents focusing and blurring from triggering when a
    // change of the input value occurs (keypress).
    if(prevState.focus !== this.state.focus) {
      this.state.focus ? this.inputField.focus() : this.inputField.blur();
    }
  }

  updateFocus(e, value) {
    // Makes sure to unfocus the field if the question icon is clicked
    if(!e.target.classList.contains("glyphicon-question-sign")) {
      if (this.state.focus !== value) this.setState({focus: value});
    } else {
      if (this.state.focus !== false) this.setState({focus: false});
    }
  }

  render() {
    const popoverBottom = (
      <Popover id="popover-positioned-bottom" title="Search Help">
        <small>
          <p>
          In this input field you can search for any project that lives on Github.com
          (ex. react). Searching will bring back a list of results from Github about the projects that match
          your search.
          </p>
          <p>
          <strong>Pro Tip:</strong> <i>You can also search for projects under organizational namespaces
          by using the organization name followed by a forward slash: <code>organizationName/</code>. Ex: <a href="/?q=facebook/"><strong>facebook/</strong></a></i>.
          </p>
        </small>
      </Popover>
    );

    return (
      <div
        className={`search-bar ${this.state.focus ? 'focus' : 'non-focus'}`}
        onClick={ (e) => this.updateFocus(e, true) }
        onBlur={ (e) => this.updateFocus(e, false) }
        onFocus={ (e) => this.updateFocus(e, true) }
      >
        <input
          className="vertical-center search-bar-input"
          type="text"
          placeholder="ex. react_on_rails"
          value={this.props.value}
          onChange={this.props.onChange}
          ref={(ip) => this.inputField = ip}
        />
        <div className="help-link vertical-center">
          <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverBottom}>
            <Glyphicon
              style={{fontSize: "20px"}}
              glyph="question-sign"
            />
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}
