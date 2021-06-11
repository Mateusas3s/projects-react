import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
      <a href={this.props.link} onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

export default Button;