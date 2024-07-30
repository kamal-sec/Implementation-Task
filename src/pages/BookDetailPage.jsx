import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBooks } from '../api/HogwartsAPI';
import Navbar from '../components/Navbar';

const BookDetailPage = () => {
  const { bookIndex } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks();
        setBook(data[bookIndex]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    getBooks();
  }, [bookIndex]);

  if (loading) {
    return <p>Loading Book Details...</p>;
  }
  if (error) {
    return <p>Error Loading Book Details: {error}</p>;
  }
  if (!book) {
    return <p>Book not Found.</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="border rounded-lg overflow-hidden shadow-lg p-4">
          {book.cover && <img src={book.cover} alt={book.title} className="w-full h-64 object-cover mb-4 rounded" />}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">{book.title}</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Author:</strong> {book.author}</p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Release Date:</strong> {book.releaseDate}</p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2"><strong>Description:</strong> {book.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
