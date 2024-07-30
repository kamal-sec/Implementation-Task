# task (# Hogwarts React App)

This project is a Single Page Application (SPA) built with React that displays information about characters, houses, books, and spells from the Harry Potter universe. It fetches data from a Hogwarts API and presents it in a user-friendly interface. To get started, ensure you have Node.js (v12 or higher) and npm (v6 or higher) installed. Clone the repository, install dependencies with `npm install`, and run the application using `npm start`, which will be available at `http://localhost:3000`.

## Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/kamal-sec/Implementation-Task.git

cd task 
example:    
    cd /Users/abdelrahman/Desktop/Yomicepa-Task/task
    ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Run the application:**
    ```bash
    npm start
    ```

The application will be available at `http://localhost:3000`.


## API Endpoints

- **Characters:** `https://potterapi-fedeperin.vercel.app/en/characters`
- **Houses:** `https://potterapi-fedeperin.vercel.app/en/houses`
- **Books:** `https://potterapi-fedeperin.vercel.app/en/books`
- **Spells:** `https://potterapi-fedeperin.vercel.app/en/spells`

## Key Features

- **Landing Page:** Home page of the application.
- **Characters Page:** Displays a list of characters. Each character links to its detail page.
- **Character Detail Page:** Displays detailed information about a single character.
- **Houses Page:** Displays a list of houses. Each house links to its detail page.
- **House Detail Page:** Displays detailed information about a single house, including a list of characters belonging to that house.
- **Books Page:** Displays a list of books. Each book links to its detail page.
- **Book Detail Page:** Displays detailed information about a single book.
- **Spells Page:** Displays a list of spells.

## Styling with Tailwind CSS and Chakra UI

- **Tailwind CSS:** Used for utility-first styling to create responsive and clean UI components easily.
- **Chakra UI:** Used for component-based styling, providing accessible and reusable UI components.

## Important Decisions and Rationale

1. **API Integration:** We chose to fetch data from a predefined API (`https://potterapi-fedeperin.vercel.app/en`) to allow dynamic data fetching and ensure the app displays the most up-to-date information.
2. **Component Reusability:** We created a `GenericCard` component to be reused for displaying characters, houses, books, and spells, ensuring consistency and reducing code duplication.
3. **State Management:** We used React's built-in state management (useState and useEffect hooks) for simplicity and ease of use in a small-scale project.
4. **Routing:** We utilized `react-router-dom` for client-side routing to create a seamless SPA experience.
5. **Styling:** We combined Tailwind CSS for utility-first styling with Chakra UI for component-based styling to leverage the strengths of both libraries.

## Usage

### Character Search

- Characters can be searched by their nickname using the search bar on the characters page.

### Books Search

- Books can be searched by their Title using the search bar on the Books page.

### Change Background Color

- On the house detail cards, users can Change the background color between the primary and secondary colors defined for each house.

### Error Handling

- If any API call fails or if a resource is not found, appropriate error messages are displayed to the user.

### Navigation

- The Navbar provides links to navigate between Characters, Houses, Books, and Spells pages.

## API Base URL && UI Library Used

- The Harry Potter API used for fetching data.("https://potterapi-fedeperin.vercel.app/en")
- React, Tailwind CSS, and Chakra UI documentation and community for support.
- react-router-dom
