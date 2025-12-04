import { Link } from "react-router-dom"

function MovieSummary(props) {
    return (
        <div className="card">
            <p>{props.movieDetails.title}</p>

            {props.movieDetails.imgURL
                && <img src={props.movieDetails.imgURL} alt="Movie poster" />
            }

            <p>Year: {props.movieDetails.year}</p>
            <p>Rating: {props.movieDetails.rating}</p>

            {/* invoke callback in the grandparent component */}
            <button onClick={() => { props.onDelete(props.movieDetails.id) }}>Delete</button>

            <Link to={`/movies/${props.movieDetails.id}`}>
                <button>More Details</button>
            </Link>
        </div>
    )
}

export default MovieSummary