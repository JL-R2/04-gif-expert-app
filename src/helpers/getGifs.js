export const getGifs = async (category,count =5) => {

    console.log(count)
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZXVA8wcWVWhrZE1iYNjUH9SNjfmZWmwV&q=${category}&limit=${count}`

    const resp = await fetch(url);
    const { data } = await resp.json();

     const gifs = data.map(img => ({
         id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    })) 
     console.log(gifs);
    return gifs;
}