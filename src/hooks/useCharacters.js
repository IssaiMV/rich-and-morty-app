import { useState, useEffect } from 'react';

function useCharacters(searchTerm = '') {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        let url = 'https://rickandmortyapi.com/api/character';

        if (searchTerm) {
            url += `?name=${searchTerm}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
                setCharacters([])
            });
    }, [searchTerm]);

    return { characters, loading };
}

export default useCharacters;
