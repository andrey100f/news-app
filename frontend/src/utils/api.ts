import axios from "axios";

 const baseUrl = "http://localhost:8000/api/news";

export async function fetchNewsData(topic: string) {
    try {
        const url = `${baseUrl}?topic=${topic}`;
        const result = await axios.get(url);
        return Promise.resolve(result.data);
    } catch (error) {
        throw new Error(error as string);
    }
}