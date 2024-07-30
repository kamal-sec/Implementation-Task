import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CharactersPage from './pages/CharactersPage';
import CharacterDetailPage from './pages/CharacterDetailPage';
import HouseDetailPage from './pages/HouseDetailPage';
import HousesPage from './pages/HousesPage';
import BooksPage from './pages/BooksPage';
import BookDetailPage from './pages/BookDetailPage';
import SpellsPage from './pages/SpellsPage';

function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:characterIndex" element={<CharacterDetailPage />} />
        <Route path="/houses" element={<HousesPage />} />
        <Route path="/houses/:houseIndex" element={<HouseDetailPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:bookIndex" element={<BookDetailPage />} />
        <Route path="/spells" element={<SpellsPage />} />
      </Routes>
    </div>
  );
}

export default App;
