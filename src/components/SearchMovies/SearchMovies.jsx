
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Button, Form, Input } from './SearchMovies.styled';

const SearchMovies = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  // Funcția pentru căutare automată la schimbarea input-ului
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim() !== '') {
        onSubmit(query);  // Apelează funcția onSubmit la fiecare modificare validă
      }
    }, 500); // Delay de 500ms pentru debounce

    return () => {
      clearTimeout(handler); // Curăță timeout-ul pentru a preveni request-uri inutile
    };
  }, [query, onSubmit]);

  // Funcția pentru butonul de submit
  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter something');
      return;
    }
    onSubmit(query);
  };

  // Actualizează query-ul la fiecare modificare a input-ului
  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="query"
        type="text"
        value={query}
        onChange={handleInputChange} // Actualizare automată la schimbarea input-ului
        placeholder="Search movies"
      />
      <Button type="submit">Search</Button> {/* Buton pentru căutare manuală */}
    </Form>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovies;


