import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCharacters } from '../api/HogwartsAPI';
import Navbar from '../components/Navbar';

const CharacterDetailPage = () => {
    const { characterIndex } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCharacters = async () => {
            try {
                const data = await fetchCharacters();
                setCharacter(data[characterIndex]);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        getCharacters();
    }, [characterIndex]);

    if (loading) {
        return <p>Loading Character Details...</p>;
    }

    if (error) {
        return <p>Error Loading Character Details: {error}</p>;
    }

    if (!character) {
        return <p>Character not Found.</p>;
    }

    return (
        <div>
            <Navbar />
            <div className="p-4">
                <div className="border rounded-lg overflow-hidden shadow-lg p-4">
                    {character.image && <img src={character.image} alt={character.name} className="w-full h-64 object-cover mb-4 rounded" />}
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">{character.name}</h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Nickname:</strong> {character.nickname}</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>House:</strong> {character.house}</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Role:</strong> {character.role}</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Blood Status:</strong> {character.bloodStatus}</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Species:</strong> {character.species}</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Patronus:</strong> {character.patronus}</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Animagus:</strong> {character.animagus}</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Boggart:</strong> {character.boggart}</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Wand:</strong> {character.wand}</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Skills:</strong> {character.skills}</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2">
                        <strong>Children:</strong> {character.children && character.children.length > 0 ? character.children.join(', ') : "Has no Children"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetailPage;
