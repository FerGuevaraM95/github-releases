import React from 'react';
import PropTypes from 'prop-types';

// Estilos
import './GithubAvatar.css';

// Componentes
import ExternalLink from '../ExternalLink';

/**
 * Props del componente
 */
  const propTypes = {
  // Este objeto viene en las respuestas de la API de Github
  // Requerimos las propiedades que necesitamos
    author: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired
  }).isRequired
}

/**
 * Muestra un link con el nombre del usuario y su avatar
 */
class GithubAvatar extends React.PureComponent {
  /**
   * Renderizamos el usuario
   */
  render() {
    let author = this.props.author;

    return <span className="GithubAvatar">
      <img className="GithubAvatar__Image" alt={ `${author.login}'s avatar` }
        src={ author.avatar_url }/>
      <ExternalLink to={ author.html_url }>{ author.login }</ExternalLink>
    </span>
  }
}

// Export the class
ExternalLink.propTypes = propTypes;
export default GithubAvatar;
