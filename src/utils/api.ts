import axios from "axios";

export async function fetchNewsData(topic: string) {
    try {
        const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=d2108377a612431dbcce0157617c494f`
        const result = await axios.get(url);
        const data = result.data.articles;
        console.log(data);
        return Promise.resolve(data);
    } catch (error) {
        throw new Error(error as string);
    }
}