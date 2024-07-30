import React from 'react';
import GenericCard from './GenericCard';

const CharacterList = ({ characters, house }) => {
  const filteredCharacters = characters.filter(character => character.house === house);

  return (
    <div className="p-4">
      {filteredCharacters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCharacters.map((character, index) => (
            <GenericCard
              key={index}
              index={index}
              type="character"
              Coverimage={character.image}
              name={character.name}
              nickname={character.nickname}
              house={character.house}
            />
          ))}
        </div>
      ) : (
        <p>No characters found for house: {house}</p>
      )}
    </div>
  );
};

export default CharacterList;
