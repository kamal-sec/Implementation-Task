import React, { useEffect, useState } from 'react';
import { fetchSpells } from '../api/HogwartsAPI';
import GenericCard from '../components/GenericCard';
import Navbar from '../components/Navbar';

const SpellsPage = () => {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getSpells = async () => {
      try {
        const data = await fetchSpells();
        setSpells(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getSpells();
  }, []);

  if (loading) {
    return <p>Loading Spells...</p>;
  }

  if (error) {
    return <p>Error loading spells: {error}</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-4">
        {spells.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {spells.map((spell, index) => (
              <GenericCard
                key={index}
                index={index}
                type="spell"
                name={spell.name}
                use={spell.use}
              />
            ))}
          </div>
        ) : (
          <p>No Spells Available.</p>
        )}
      </div>
    </div>
  );
};

export default SpellsPage;
