#PE05
# Input
The Recipe Finder application allows users to input recipe details such as the recipe name, ingredients, and cooking instructions through an interactive web interface. Users can also browse a list of existing recipes, click on a recipe to view its details, edit recipe details, or delete a recipe. The input is handled through React components, and form fields ensure structured data entry. 

# Process
The frontend, developed using React and React Router, manages the user interface and navigation. The application communicates with a Node.js and Express backend that handles API requests. The backend connects to a MongoDB Atlas database, where all recipe data is stored. The backend provides RESTful endpoints for creating, reading, updating, and deleting (CRUD) recipes. Data flows between the frontend and backend through Axios HTTP requests, ensuring seamless interactions. The application maintains a structured component hierarchy and utilizes useEffect and useState hooks for state management and dynamic updates.

# Output
The application dynamically updates the Recipe List with new recipes and reflects any modifications made to existing recipes. When a user selects a recipe, they are navigated to a detailed view displaying all its information. Changes such as adding, editing, or deleting recipes are instantly reflected in the UI and persisted in the database. Upon deletion, the recipe is removed from the list, and users are redirected to the homepage. The output is presented in a visually structured format, ensuring a smooth and user-friendly experience with proper navigation and responsiveness.
