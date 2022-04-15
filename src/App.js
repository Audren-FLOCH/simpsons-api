import axios from 'axios';
import React, { useState, useEffect } from "react";

function App() {
    const [simpson, setSimpson] = useState([]);

    const getSimpson = () => {
        axios
            .get('https://simpsons-quotes-api.herokuapp.com/quotes')
            .then((response) => { setSimpson(response.data[0]) })
            .catch((error) => console.warn(error))
    }

    useEffect(() => {
        getSimpson();
    }, []);

    return (
        <div>
            <figure className="QuoteCard">
                <img src={simpson.image} alt={simpson.character} />
                <figcaption>
                    <blockquote>{simpson.quote}</blockquote>
                    <cite>{simpson.character}</cite>
                </figcaption>
            </figure>
            <button type="button" onClick={getSimpson}>Get a new Simpson</button>
        </div>
    )
}

export default App;
