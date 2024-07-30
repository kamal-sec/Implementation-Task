import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api/HogwartsAPI';
import GenericCard from '../components/GenericCard';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
        setFilteredCharacters(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getCharacters();
  }, []);

  useEffect(() => {
    const results = characters.filter(character =>
      character.nickname.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(results);
  }, [searchTerm, characters]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <p>Loading Characters...</p>;
  }

  if (error) {
    return <p>Error Loading Characters: {error}</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <SearchBar value={searchTerm} onChange={handleSearch} placeholder={"Search by Nickname"} />
        {filteredCharacters.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCharacters.map((character, index) => (
              <GenericCard
                key={index}
                index={index}
                type="character"
                Coverimage={character.image}
                name={character.name}
                title={character.title}
                nickname={character.nickname}
                house={character.house}
                animal={character.animal}
                use={character.use}
              />
            ))}
          </div>
        ) : (
          <p>No Character found with this Nickname: {searchTerm}</p>
        )}
      </div>
    </div>
  );
};

export default CharactersPage;
