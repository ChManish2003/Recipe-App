Recipe App

Overview

The Recipe App is a ReactJS-based application that allows users to browse, search, and save their favorite recipes. It integrates with the Edamam API to fetch real-time recipe data, providing users with a seamless and interactive cooking experience.

Features

Browse Recipes: View a list of available recipes with titles, images, and brief descriptions.

Search Functionality: Search for recipes based on keywords, ingredients, or dietary preferences.

Detailed Recipe View: Access complete recipe details, including ingredients, preparation steps, cooking time, and serving size.

Favorites: Mark recipes as favorites for easy access later.

Filters: Filter recipes by categories such as breakfast, lunch, dinner, and dietary restrictions.

State Management: Utilizes Redux for efficient state handling.

Technologies Used

ReactJS

Redux

Edamam API

React Router

Tailwind CSS (or your preferred styling framework)

Installation

Clone the repository:

git clone https://github.com/manishkumar2003
cd recipe-app

Install dependencies:

npm install

Set up API credentials:

Obtain an API key from Edamam.

Create a .env file in the root directory and add:

REACT_APP_EDAMAM_API_KEY=your_api_key
REACT_APP_EDAMAM_APP_ID=your_app_id

Start the development server:

npm run dev

Usage

Open the app in the browser (http://localhost:5173 by default for Vite apps).

Search for recipes using the search bar.

Click on a recipe to view its details.

Add recipes to your favorites list for future reference.

Future Enhancements

User Authentication: Allow users to create accounts and save their favorite recipes.

Meal Planner: Enable users to plan weekly meals and generate grocery lists.

Offline Mode: Cache recipes for offline access.

Contributing

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Make your changes and commit them (git commit -m 'Add new feature').

Push to the branch (git push origin feature-branch).

Open a pull request.



