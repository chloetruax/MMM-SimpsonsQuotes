# Simpsons Quote Module

Simple Magic Mirror Module that pulls random simpsons quotes from an API. Allows for the character who said the quote to be displayed or not depending on preference.



## Example of the Quote
![ExamplePosts](./MMM-SimpsonsQuotes.PNG)

## Configuration

``` javascript
{
    module: "MMM-SimpsonsQuotes",
    position: "top-left", //position,
    updateTime: 120000, // Time between reloads of quotes, default is 2 mins
    showCharacterImage: true // Choose whether or not to show an image of the character who said the line, default is true.
},
```