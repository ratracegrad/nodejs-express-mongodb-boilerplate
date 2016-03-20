# Demonstration of using mongodb with NodeJS and Express
This is a very simple application that uses a MongoDB database for persistence of data. The application will show all movies in the database and give the users an option to add a new movie to the database.

## Installation
```bash
git clone https://github.com/ratracegrad/nodejs-with-mongodb
npm install
node app.js
```

## Technology Used
1. Node.js
2. MongoDB
3. Express.js
4. Bootstrap

## Live Demonstration
[You can view this app in production here](http://nodemongodemo.herokuapp.com/)


## Screenshots
### Homepage
The homepage for the application. It will show all movies in the database and give you an option to add a new movie to the database.
![homepage](/screenshots/homepage.png?raw=true "Homepage")

----

### Add a new movie
To add a new movie to the database, enter a title, year of release and IMDB details and click the submit button.
![Add Movie](/screenshots/create_new_movie.png?raw=true "Add new movie")

---

### New movie added confirmation
When a new movie is added, you will get this confirmation page. It will show the title, year and IMDB details.

![Movie added confirmation](/screenshots/movie_added.png?raw=true "Movie added confirmation")
