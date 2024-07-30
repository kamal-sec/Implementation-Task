import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHouses, fetchCharacters } from '../api/HogwartsAPI';
import Navbar from '../components/Navbar';
import CharacterList from '../components/CharacterList';

const HouseDetailPage = () => {
  const { houseIndex } = useParams();
  const [house, setHouse] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHouses = async () => {
      try {
        const data = await fetchHouses();
        setHouse(data[houseIndex]);
      } catch (err) {
        setError(err.message);
      }
    };

    const getCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getHouses();
    getCharacters();
  }, [houseIndex]);

  if (loading) {
    return <p>Loading House Details...</p>;
  }

  if (error) {
    return <p>Error loading House Details: {error}</p>;
  }

  if (!house) {
    return <p>House not Found.</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="border rounded-lg overflow-hidden shadow-lg p-4 mb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">{house.name}</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Founder:</strong> {house.founder}</p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Animal:</strong> {house.animal}</p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Element:</strong> {house.element}</p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Ghost:</strong> {house.ghost}</p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Common Room:</strong> {house.commonRoom}</p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Colors:</strong> {house.colors.join(', ')}</p>
        </div>
        <CharacterList characters={characters} house={house.name} />
      </div>
    </div>
  );
};

export default HouseDetailPage;
