# Cities Application

## Input
The user interacts with the application through three main pages:  
1.  Cities List  – Displays a list of cities with clickable links to view details.  
2.  Add City  – A form where the user enters a city’s name, country, and population.  
3.  City Details  – Shows detailed information about a selected city.  

Users can navigate using React Router, click on a city to view details, and add new cities through a form submission.  

##  Process  
- React Router manages page navigation.  
- The `useState` hook manages the list of cities dynamically.  
- The `useParams` hook extracts city IDs to display details.  
- When a new city is added, it updates the state and triggers a  redirection  to the Cities List.  

##  Output   
- The "Cities List" updates dynamically with added cities.  
- Clicking a city name shows its details.  
- The app provides a seamless navigation experience with a clean UI.  
