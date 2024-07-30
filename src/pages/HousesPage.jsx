import React, { useEffect, useState } from 'react';
import { fetchHouses } from '../api/HogwartsAPI';
import GenericCard from '../components/GenericCard';
import Navbar from '../components/Navbar';

const HousesPage = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHouses = async () => {
      try {
        const data = await fetchHouses();
        setHouses(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getHouses();
  }, []);

  if (loading) {
    return <p>Loading Houses...</p>;
  }

  if (error) {
    return <p>Error Loading Houses: {error}</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-4">
        {houses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {houses.map((house, index) => (
              <GenericCard
                key={index}
                index={index}
                type="house"
                name={house.name}
                founder={house.founder}
                animal={house.animal}
                colors={house.colors || []}
              />
            ))}
          </div>
        ) : (
          <p>No houses available.</p>
        )}
      </div>
    </div>
  );
};

export default HousesPage;
