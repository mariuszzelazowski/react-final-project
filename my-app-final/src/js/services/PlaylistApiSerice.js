import React, {useEffect, useState} from "react";

const playlistAPI = "https://d3mpvzein3znbf.cloudfront.net/api/playlists/"

const PlaylistApiService = () => {
    const [values, setValues] = useState([]);

    useEffect((id) => {
        fetch(`${playlistAPI}${id}`)
            .then((response) => response.json())
            .then((data => data.map((el) => (console.log(el)))))
            .catch(err => console.warn(err))
    });
};

export default PlaylistApiService;