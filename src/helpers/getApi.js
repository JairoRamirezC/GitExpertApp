export const getApi = async (resp) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(resp)}&limit=10&api_key=wBdiWxIrARcjtEM4lXTnJSKTzXhyvud8`
    const response = await fetch(url)
    const {data} = await response.json()
    const info = data.map(({id, title, images}) => (
        {
            id,
            title,
            images: images.original.url
        }
        ))
    return info
}