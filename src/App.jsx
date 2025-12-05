import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieList from "./pages/MovieList"
import About from "./pages/About"
import Contact from "./pages/Contact"

import movies from "./data/movies.json"
import MovieDetails from "./pages/MovieDetails"

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies)

  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")
  const [imageUrl, setImageUrl] = useState("")


  const deleteMovie = (movieId) => {
    // get the new list of movies...
    const newList = moviesToDisplay.filter((movieDetails, i, arr) => {
      if (movieDetails.id !== movieId) {
        return true;
      } else {
        return false;
      }
    })

    // update state...
    // moviesToDisplay = newList; // NEVER, NEVER, MODIFY STATE DIRECTLY!
    setMoviesToDisplay(newList)
  }


  const handleSubmit = (e) => {

    // prevent page reload
    e.preventDefault();

    // find the id of the new movie
    const movieIds = moviesToDisplay.map((movieObj, i, arr) => {
      return movieObj.id;
    });
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1

    // prepare an object with the details of the new movie
    const newMovie = {
      id: nextId,
      title: title,
      year: year,
      imgURL: imageUrl
    }

    // prepare an array with the new list of movies
    const newList = [newMovie, ...moviesToDisplay]

    // update the list of movies
    setMoviesToDisplay(newList)

    // clear form
    setTitle("")
    setYear("")
    setImageUrl("")
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <section className="card">
        <h2>Create your own movie</h2>

        <form onSubmit={handleSubmit}>

          <label>
            Title:
            <input
              type="text"
              name="title"
              placeholder="the godfather"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
            />
          </label>
          

          <label>
            Year:
            <input
              type="number"
              name="year"
              placeholder="1999"
              min={1900}
              max={2050}
              required
              value={year}
              onChange={(e) => { setYear(e.target.value) }}
            />
          </label>


          <label>
            Image URL:
            <input
              type="url"
              name="imageUrl"
              placeholder="https://domain.com/image.jpg"
              value={imageUrl}
              onChange={(e) => { setImageUrl(e.target.value) }}
            />
          </label>


          <button>Create</button>
        </form>
      </section>

      <Routes>
        <Route path="/" element={<MovieList moviesArr={moviesToDisplay} onDelete={deleteMovie} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies/:movieId" element={<MovieDetails moviesArr={moviesToDisplay} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
