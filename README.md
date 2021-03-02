# WRI Movies
A list of movies. The template is from Clever Programmer youtube channel.

## What it does?
- It show list of movies
- It show a trailer of the movie when a user click on the movie
- Movies are display in horizontal and user can scroll horizontal
- Movies are fetch from TMDB API
- The color of the nav change when scrolling

## Tools
- React
- CSS

## Packages
- `axios` to make http request
- `movie-trailer` to get youtube trailers for any movie
- `react-youtube` to display video

## Notes
- When you use `export default file`, you can rename it when you import this file
- You can only have one default export in a file
- `overflow-x: scroll;` allow scrolling on horizontal
- '?' is called optional chaining which is used to prevent the code from breaking if the value is undefined. (ex - movie?.title)
- When using listeners on useEffect().  Remove the old listener when calling a new listener that is the same to prevent too many same listeners from being used.
```
return () => {
    window.removeEventListener("scroll");
}
```