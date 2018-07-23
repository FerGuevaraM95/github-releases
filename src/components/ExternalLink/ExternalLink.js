import React from 'react';
import PropTypes from 'prop-types';

/**
 * Props del componente
 */
const propTypes = {
to: PropTypes.string.isRequired,
children: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.node,
  PropTypes.element
]).isRequired,
className: PropTypes.string
};

// Por defecto, el link no tiene ninguna clase
const defaultProps = {
  className: ''
}

/**
 * Muestra un link que se abrirá en una nueva página
 */
class ExternalLink extends React.PureComponent {
  /**
   * Renderizamos el link
   */
  render() {
    return <a href={ this.props.to } className={ this.props.className }
      rel="noopener" target="_blank">
      { this.props.children }
    </a>;
  }
}

// Export the class
ExternalLink.propTypes = propTypes;
ExternalLink.defaultProps = defaultProps;
export default ExternalLink;
