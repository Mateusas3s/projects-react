import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.element
}

Button.defaultProps = {
  children: <p>Sem valor</p>
}

export default Button;