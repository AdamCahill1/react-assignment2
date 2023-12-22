# Assignment 2 - Web API.

Name: Adam Cahill

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + added api's for all calls on the frontend to backend
 + somewhat added a collection and api for favourites
 + if not logged in some features and pages cannot be accessed such as adding to favourites and watchlist along with viewing these pages.


## Setup requirements.

[ Just the installs used during the labs.]

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=localhost
mongoDB=mongodb://localhost:27017/movies_db
seedDb=true
secret=YourJWTSecret
TMDB_KEY
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/{movieid}/reviews | GET | Get all reviews for movie 
- /api/movies/tmdb/trailer?id={movieid} | GET | Get Movie trailers 
- /api/movies/tmdb/watchProviders?id={movieid} | GET | Get Movie viewing providers. eg apple, youtube etc
- /api/movies/tmdb/searchMovies?search={query} | GET | Get Movie trailers 
etc

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.
For a user to access favourites movies and watchlisted movies they must be logged in with an authed account. They will also not be able to add to these routhes unless they are loged in with an authed account.

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

First i began with transfering all the tmdb apis over to the web-api backend server so i could begin setting up my own apis. Once all the tmdb api's were removed from the front end i began to intigrate some gets for the front end to be able to communicate with these apis. It was a pretty straight forward operation with some problems with trying to get the right syntax for those apis with queries. 

I think this method for apis is alot better as it provides alot more security for your web browser against anyone with intention of harm.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   
