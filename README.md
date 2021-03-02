# WRI Movies

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