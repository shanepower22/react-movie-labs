# Assignment 1 - ReactJS app.

Name: Shane Power

## Overview.
 
This is a movie database app that uses ReactJS and the Material UI component library. [The Movie Database (TMDB)](https://www.themoviedb.org/) is used as the movie database. Users can query from popular movies, trending movies, top rated movies, view upcoming movies and add to a "must watch" list, add and view favourite movies, filter movies by genre or title, and sort the list by rating, popularity and others.
### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ __Must Watch list:__ Users can add or remove an upcoming film to a must watch list.
+  __Top Rated Movies page:__ Shows the top rated movies on TMDB. 
+ __Trending Movies page:__ Shows currently popular movies on TMDB.
+ __Pagination__: Users can browse up to 500 pages of movies from the TMDB database.
+ __Sorting__: Users can sort the database by many queries e.g Most Popular, Highest Rated, Newest Releases, Title (A-Z)
+ __Cast List__: A list of actors and their associated character is displayed in the movie details page.
+ __Similar Movies__: A list of similar movies is showed on the movie details page, using the title and genre as reference.


## Setup requirements.

You must supply your own TMDB API key. To do this:

+ Firstly, sign up for an account at [The Movie Database (TMDB)](https://www.themoviedb.org/).
+ Verify your email and login to your account.
+ Navigate to your account settings and click the API section.
+ Request a new API key by clicking under "Request an API Key"
+ Choose the Developer option
+ Accept the terms and fill in your details.
+ Once an API key is generated, create a new file named ".env"
+ Copy the following and replace "your API Key value" with your API key.

        REACT_APP_TMDB_KEY=your API key value
        FAST_REFRESH=false

To start the react server in development mode, navigate to the movies folder in a terminal and run "npm start".


## API endpoints.


+ Top rated movies - movie/toprated
+ Upcoming movies - movie/upcoming
+ Movie credits - movie/:id/credits
+ Similar movies - movie/:id/similar

## Routing.

+ /movies/upcoming - displays upcoming movies not released to theaters
+ /movies/toprated - displays top rated movies on TMDB sorted from highest to lowest
+ /movies/mustwatch - user curated list of upcoming movies added to must watch list
+ /movies/trending - displays movies currently trending on TMDB


## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

+ Pagination - used the [Material UI API reference docs](https://mui.com/material-ui/react-pagination/)
+ React Router DOM Location Hook - Used for displaying the sorting menu only on certain pages, [this article](https://medium.com/@umesh.rana0269/how-to-use-location-hook-in-react-router-dom-v6-010cf5facae9) helped me understand how the parameters worked.


