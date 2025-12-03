import movies from "../data/movies.json"

function MovieList() {
    return (
        <>
            <h2>List of movies</h2>

            {movies.map((movieObj) => {
                return (
                    <div key={movieObj.id} className="card">
                        <p>{movieObj.title}</p>
                        <img src={movieObj.imgURL} alt="Movie poster" />
                        <p>Year: {movieObj.year}</p>
                        <p>Rating: {movieObj.rating}</p>
                    </div>
                )
            })}
        </>
    )
}

export default MovieList