import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GenericCard = ({ index, type, Coverimage, name, title, nickname, house, animal, use, founder, element, ghost, commonRoom, releaseDate, description, colors = [] }) => {
  const navigate = useNavigate();
  const [bgColorIndex, setBgColorIndex] = useState(0);

  const handleCardClick = () => {
    if (type === 'character') {
      navigate(`/characters/${index}`);
    } else if (type === 'house') {
      navigate(`/houses/${index}`);
    } else if (type === 'book') {
      navigate(`/books/${index}`);
    } else if (type === 'spell') {
    
    }
  };

  const toggleBackgroundColor = () => {
    setBgColorIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  return (
    <div
      className="border rounded-lg overflow-hidden shadow-lg p-4 cursor-pointer"
      onClick={handleCardClick}
      style={{ backgroundColor: colors[bgColorIndex] || 'white' }}
    >
      {Coverimage && <img src={Coverimage} alt={name || title} className="w-full h-64 object-cover mb-4 rounded" />}
      {name && <h2 className="text-xl font-bold mb-2">{name}</h2>}
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {description && <p className="text-gray-500 mb-2">{description}</p>}
      {releaseDate && <p className="text-gray-500 mb-2">{releaseDate}</p>}
      {nickname && (
        <div className="mb-2">
          <h3 className="text-sm font-semibold uppercase">Nickname</h3>
          <p className="text-sm">{nickname}</p>
        </div>
      )}
      {house && type === 'character' && (
        <div className="mb-2">
          <h3 className="text-sm font-semibold uppercase">House</h3>
          <p className="text-sm text-blue-500 cursor-pointer">{house}</p>
        </div>
      )}
      {animal && (
        <div className="mb-2">
          <h3 className="text-sm font-semibold uppercase">Animal</h3>
          <p className="text-sm">{animal}</p>
        </div>
      )}
      {use && (
        <div className="mb-2">
          <h3 className="text-sm font-semibold uppercase">Use</h3>
          <p className="text-sm">{use}</p>
        </div>
      )}
      {founder && (
        <div className="mb-2">
          <h3 className="text-sm font-semibold uppercase">Founder</h3>
          <p className="text-sm">{founder}</p>
        </div>
      )}
      {element && (
        <div className="mb-2">
          <h3 className="text-sm font-semibold uppercase">Element</h3>
          <p className="text-sm">{element}</p>
        </div>
      )}
      {ghost && (
        <div className="mb-2">
          <h3 className="text-sm font-semibold uppercase">Ghost</h3>
          <p className="text-sm">{ghost}</p>
        </div>
      )}
      {commonRoom && (
        <div className="mb-2">
          <h3 className="text-sm font-semibold uppercase">Common Room</h3>
          <p className="text-sm">{commonRoom}</p>
        </div>
      )}
      {colors.length > 1 && (
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={(e) => {
            e.stopPropagation();
            toggleBackgroundColor();
          }}
        >
          Change Color
        </button>
      )}
    </div>
  );
};

export default GenericCard;
