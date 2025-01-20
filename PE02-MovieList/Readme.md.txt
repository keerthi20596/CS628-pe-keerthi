# Movie List Application

Input
The program takes input in two forms:

A predefined array of movie objects. Each object contains the following properties:
  - title: The name of the movie.
  - genre: The genre of the movie (e.g., Sci-Fi, Crime, Action).
  - releaseYear: The year the movie was released.
User interaction inputs: 
   1. Genre selection through a dropdown menu.
   2. Click events on individual movie items to display an alert with the movie title.
   
Process
  The application initializes the movie list and available genres.
  The user selects a genre from the dropdown menu. Based on the selected genre, the program filters the movie list.
  The filtered movie list is dynamically rendered on the screen using React’s state management.
  When the user clicks on a movie, the application handles the click event and displays an alert showing the movie’s title.

Output
  A dynamically filtered list of movies displayed based on the user’s genre selection.
  An alert showing the title of a clicked movie.


## Screenshots
![Default View](screenshots/AllGenres.png)
![Filtered View](screenshots/selectionGenre*.png)
![Movie Click Alert](screenshots/movie_click_alert.png)
