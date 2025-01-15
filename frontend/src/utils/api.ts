import axios from "axios";
import { NewsProps } from "./props";

 const newsUrl = "http://localhost:8000/api/news";
 const cleanupUrl = "http://localhost:8000/api/cleanup/";
 const chartUrl = "http://localhost:8000/api/chart/";

export async function fetchNewsData(topic: string) {
    try {
        const url = `${newsUrl}?topic=${topic}`;
        const result = await axios.get(url);
        return Promise.resolve(result.data);
    } catch (error) {
        throw new Error(error as string);
    }
}

export async function fetchCleanData(newsData: NewsProps[]) {
    try {
        const result = await axios.post(cleanupUrl, newsData);
        return Promise.resolve(result.data);
    } catch (error) {
        throw new Error(error as string);
    }
}

export async function fetchChartData(newsData: NewsProps[]) {
    try {
        const result = await axios.post(chartUrl, newsData);
        return Promise.resolve(result.data);
    } catch (error) {
        throw new Error(error as string);
    }
}
