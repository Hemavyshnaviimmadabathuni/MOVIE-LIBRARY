# Movie Library
This is a movie library web application created using EJS, CSS, and JavaScript for the Frontend, Node.js for the Backend, MongoDB as the Database.

## Features
# User Authentication (Sign In/Sign Up)
New users can register by providing necessary details.
Existing users can log in using their credentials.

# Movie Search using OMDB API
Search for movies using the OMDB API.
Display search results with options to add movies to playlists.

# Creating Playlists
Users can create playlists by adding movies.
Each movie can be added to multiple playlists.

# Displaying All Playlists
View all created playlists in one place.
Navigate through playlists easily.

# View Movies in a Playlist
Select any playlist to see all the movies added to it.

## Installation and Setup

# Clone the Repository
Clone the GitHub repository to your local system.

# Navigate to Project Directory
Change the path to the project's directory.

# Install Dependencies
Run the command "npm install" to install all necessary dependencies.

# Connect to MongoDB Atlas
Ensure the app is connected to MongoDB Atlas.

# Start the Application
Run the command "npm start".

# Access the Application
Open your browser and go to 127.0.0.1:3002 (or your chosen port number).

## Usage Instructions
1. Register or Login
Initial Page: When you first open the application at 127.0.0.1:3002, you will land on the authentication page. 
Here, you have two options:
Register: If you are a new user, click on the "Register" link. This will take you to the registration page where you need to enter your name, email, password, and any other required details. After submitting the form, you will be redirected to the login page.
Login: If you are an existing user, enter your email and password on the login page. After successfully logging in, you will be redirected to the home page.

2. Search for Movies
Home Page: Once logged in, you will see the home page, which includes a search bar at the top. This is where you can search for movies.
Search Movies: Enter the name of the movie and the application will use the OMDB API to fetch the movie data and display the results below the search bar.
Add to Watchlist: Next to each movie in the search results, there is an "Add to Watchlist" button. Click this button to add the movie to one of your playlists. A dialog box or a dropdown will appear, allowing you to select the playlist to which you want to add the movie.

3. View Playlists
Navigation Bar: At the bottom of the home page, there is a navigation bar with a "My Lists" button.
My Lists Page: Click on the "My Lists" button to navigate to the My Lists page. Here, you will see all the playlists you have created.
Select a Playlist: Click on any playlist to view its contents. This displays all the movies or shows that have been added to the selected playlist.

4. Manage Playlists
Adding Movies to Playlists: From the search results on the home page, you can continuously add movies to any of your playlists by using the "Add to Watchlist" button.

5. Logout
Logout Button: After you have finished using the application, you can log out by clicking the "Logout" button, that is located just beside the  Mylist button in the navigation bar that is present at the bottom of the page.
Redirect to Login Page: After logging out, you will be redirected back to the login page, ensuring that your session is securely terminated.