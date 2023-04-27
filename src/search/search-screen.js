import React, { useState } from 'react';

import axios from 'axios';

const options = {
    method: 'GET',
    url: 'https://movie-database-alternative.p.rapidapi.com/',
    params: {
        s: 'Avengers Endgame',
        r: 'json',
        page: '1'
    },
    headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '6acd76d3c5mshb92be49f33577fcp11b45djsn773f45436ffc',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
};

function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = async (event) => {
        console.log('hi')
        event.preventDefault();

        if (searchQuery.trim() === '') return;

        try {
            options.params.s = searchQuery;
            const response = await axios.request(options);
            const data = response.data.Search;


            if (data.results === null) {
                setSearchResults([{ title: 'No results found' }]);
                return;
            }

            setSearchResults(data);
            console.log(searchResults);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <a href="/" className="bi-house">Home</a>
            <form onSubmit={handleSubmit}>
                <h1>Movie Database API Search</h1>
                <label htmlFor="search-input">Search for a movie:</label>
                <input
                    type="text"
                    id="search-input"
                    name="search-input"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {searchResults && searchResults.map((movie) => (
                    <li key={movie.imdbID}>
                        <img src={movie.Poster} alt={movie.Title} />
                        <div>
                            <h2>{movie.Title}</h2>
                        </div>
                    </li>
                ))}
                {!searchResults && <h2> No results found </h2>}
            </ul>
        </div>
    );
}

export default SearchScreen;