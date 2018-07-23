import React from 'react';
import PropTypes from "prop-types";

// Estilos
import './HintMessage.css';

/**
 * Props del component
 */
const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]).isRequired
}

/**
 * Muestra un mensaje aplicandole un estilo predeterminado
 */
class HintMessage extends React.PureComponent {
  /**
   * Render the HintMessage component
   */
  render = () => <p className="HintMessage">{ this.props.children }</p>;
}

// Export the class
HintMessage.propTypes = propTypes;
export default HintMessage;
