import React from 'react';
import PropTypes from 'prop-types';

// Componentes
import { Link } from 'react-router-dom';
import FaStar from 'react-icons/lib/fa/star';
import FaCodeFork from 'react-icons/lib/fa/code-fork';
import GithubAvatar from '../GithubAvatar';

/**
 * Props del componente
 */
const propTypes = {
  repo: PropTypes.object.isRequired
}

/**
 * Renderiza la información relativa a un repositorio
 */
class RepositoryRow extends React.PureComponent {
  /**
   * Render the RepositoryRow component
   */
  render() {
    let repo = this.props.repo;

    return <tr>
      <td>{ repo.full_name }</td>
      <td><GithubAvatar author={ repo.owner } /></td>
      <td><FaStar /> { repo.stargazers_count }</td>
      <td><FaCodeFork /> { repo.forks_count }</td>
      <td className="align-right">
        <a className="button button-primary" to={ `/${repo.full_name}`}>Releases</a>
      </td>
    </tr>
  }
}

// Export the class
RepositoryRow.propTypes = propTypes;
export default RepositoryRow;
