const API_BASE_URL = "https://potterapi-fedeperin.vercel.app/en";

export const fetchCharacters = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/characters`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch characters:", error);
    throw error;
  }
};

export const fetchHouses = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/houses`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch houses:", error);
      throw error;
    }
  };

  export const fetchBooks = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/books`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch books:", error);
      throw error;
    }
  };


  export const fetchSpells = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/spells`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch spells:", error);
      throw error;
    }
  };
