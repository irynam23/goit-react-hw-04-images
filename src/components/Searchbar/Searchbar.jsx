import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({ getQuery }) => {
  const [query, setQuery] = useState('');
  return (
    <header className={css.Searchbar}>
      <form
        className={css.SearchForm}
        onSubmit={e => {
          e.preventDefault();
          getQuery(query);
        }}
      >
        <input
          value={query}
          onChange={({ target }) => {
            setQuery(target.value);
          }}
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  getQuery: PropTypes.func.isRequired,
};
