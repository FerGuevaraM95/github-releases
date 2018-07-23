import React from 'react';

/**
 * Renderiza el formulario de búsqueda.
 */
class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    // Bind
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      search: '',

    }
  }

  onChange(e) {
    this.setState({ search: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
  }

  render() {
    return <form onSubmit={ this.onSubmit }>
        <label>
          Search a Repository
          <input type="text" className="u-full-width" placeholder="react, weebpack..." onChange={this.onChange} defaultValue={this.state.search} />
        </label>
        <p className="align-center">
          <input type="submit" className="button-primary" value="search" />
        </p>
      </form>;
  }
}

// Export the class
export default SearchForm;
