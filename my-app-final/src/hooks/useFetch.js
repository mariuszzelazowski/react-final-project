import React, {useState, useEffect} from "react";

const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        setPending(true);
        fetch(url, options)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => setErrors(err))
    }, [url, options])

    return ({
        data,
        pending,
        errors
    })
}

export default useFetch;