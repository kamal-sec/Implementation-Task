import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../api/HogwartsAPI';
import GenericCard from '../components/GenericCard';
import SearchBar from '../components/SearchBar';
import Navbar from '../components/Navbar';

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks();
        setBooks(data);
        setFilteredBooks(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    getBooks();
  }, []);

  useEffect(() => {
    const results = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(results);
  }, [searchTerm, books]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) {
    return <p>Loading Books...</p>;
  }

  if (error) {
    return <p>Error Loading Books: {error}</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <SearchBar value={searchTerm} onChange={handleSearch} placeholder={"Search by Title"} />
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredBooks.map((book, index) => (
              <GenericCard
                key={index}
                index={index}
                type="book"
                title={book.title}
                Coverimage={book.coverImage}
                releaseDate={book.releaseDate}
              />
            ))}
          </div>
        ) : (
          <p>No Books Found with the Title: {searchTerm}</p>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
