import { useState } from "react"
import { useNavigate } from "react-router-dom"


function AddMovie(props) {

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (e) => {

        // prevent page reload
        e.preventDefault();

        const newMovie = {
            title: title,
            year: year,
            imgURL: imageUrl
        }

        // invoke function in the parent component
        props.onCreate(newMovie)

        // redirect to the homepage
        navigate("/")
    }


    return (
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
    )
}

export default AddMovie