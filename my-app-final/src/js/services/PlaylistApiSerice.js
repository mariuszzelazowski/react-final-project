import React, {useEffect, useState} from "react";

const PlaylistApiService = () => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        fetch("https://d3mpvzein3znbf.cloudfront.net/api/playlists/?format=json&id")
            .then(response => response.json())
            .then((data => data.map((el) => (console.log(el)))))
            .catch(err => console.warn(err))
    });
};

export default PlaylistApiService;