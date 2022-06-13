import React, {useEffect, useState} from "react";

const PlaylistApiService = () => {

    const [value, setValue] = useState(null)

    useEffect(() => {
        fetch("https://d3mpvzein3znbf.cloudfront.net/api/playlists/")
            .then(response => response.json())
            .then(data => console.log(data[0].value.movie.video.sources.dash.is_uhd))
            .catch(err => console.warn(err))
    }, []);
};

export default PlaylistApiService;