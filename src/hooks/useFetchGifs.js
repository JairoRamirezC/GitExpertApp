import { useEffect, useState } from "react";
import { getApi } from "../helpers/getApi";

export const useFetchGifs = (resp) => {
    const [gifs, setGifs] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getApi(resp)
            .then(images => {
                setGifs({
                    data: images,
                    loading: false
                })
            })
    }, [resp])

    return gifs
}