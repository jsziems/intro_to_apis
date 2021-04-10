// console.log("hello world")

/*
let url = "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"

fetch(url)  // The fetch method is available to us in the browser, and we supply
            // at least a URL and it will kick off a "GET" request to that URL.
    .then(res => res.json())  // .then can be chained on a fetch to allow us 
                              // to take the response and do something with it.
    .then(json => {  // In this case I used the json data to display in the console.
        console.log(json)
        console.log(json.title)       // These logs are unique to the json we got back
        console.log(json.locations)  // and only work on this object's structure.
        console.log(json.director)
    })
*/
    /*
    BASIC fetch usage

    fetch(<url>)
        .then(<cb to process the data>)
        .then(<cb to use the data>)

    */

// Use the json array to create a new array of the film obj that only have a title and the rt rating.
/*
let myArr;
[
    {title: "something", rt_score: 83}
]
console.log(myArr)
*/
let myArr [];

const baseURL = "https://ghibliapi.herokuapp.com"
fetch(baseURL + "/films")  //Reach out to internet to get data.
    .then(res => res.json())  // Returns only the json data
    .then(json => {
        console.log(json)
        console.log(json[1].title)
        console.log(json[1].rt_score)
/* SYNTAX ERRORS   Get option from Justin's file  starting at ~1:15 */

        /*
        json.map(film => {
            console.log(film.title)
            console.log(film.rt_score)
            myArr.push({
                title: film.title,
                rt_score: film.rt_score
            })
*/ 
//  Better method for using map:
        let myArr = json.map(film => {  // make a new array reducing the items
            return {
                title: film.title,
                rt_score: +film.rt_score  // turn string into number
            }
        }).sort((cur, prev) => prev.rt_score - cur.rt_score) // sort them by rating.

        // Passes off the sorted array to be displayed
        displayResults(myArr)

/* OR THIS:

for (let film of json){
    myArr.push(
        {
            title: film.title,
            rt_score: film.rt_score
        }
    )
}
*/
    })

    //Display Results
    // Goes through the films that are passed in to the function
    function displayResults(films) {
        // console.log("In display results")  // Checks syntax that we're in the function
        // Grabs the ul element from the index.html
        let filmList = document.getElementById("film-list") // This is the first time we gram a dom element by id
        films.map(film => {
            // For each film I make a new li tag
            let filmLi = document.createElement('li') // This is our first time making a new tag from js
            // Assignment of the film title and rt_score to the inner text
            filmLi.innerText = `${film.title} ${film.rt_score}`
            // Adds the newly made li tag with text to the ul tag
            filmList.appendChild(filmLi)
        })
}
