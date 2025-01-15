import { useState } from "react";
import { NewsProps, ChartProps } from "../utils/props";
import { fetchChartData, fetchNewsData, fetchCleanData } from "../utils/api";
import { NavLink } from "react-router-dom";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";

function Table() {
    const [newsData, setNewsData] = useState<NewsProps[]>();
    const [chartData, setChartData] = useState<ChartProps[]>();
    const [cleanNewsData, setCleanNewsData] = useState<NewsProps[]>();

    async function handleClick(topic: string) {
        const newsDataFromApi = await fetchNewsData(topic);
        const cleanNewsDataFromApi = await fetchCleanData(newsDataFromApi);
        const newsDataForChart = await fetchChartData(cleanNewsDataFromApi);
        setChartData(newsDataForChart);
        setCleanNewsData(cleanNewsDataFromApi);
        setNewsData(newsDataFromApi);
    }

    function handleExport() {
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(cleanNewsData);

        XLSX.utils.book_append_sheet(wb, ws, "News Data");

        XLSX.writeFile(wb, "news_data.xlsx");
    }

    function handleCleanup() {
        setNewsData(cleanNewsData);
    }

    return (
        <>
            <div className="container mt-1">
                <div className="row">
                    <div className="col-md-12">
                        <button className="btn btn-primary m-2" onClick={() => handleClick("technology")}>Technology</button>
                        <button className="btn btn-primary m-2" onClick={() => handleClick("health")}>Health</button>
                        <button className="btn btn-primary m-2" onClick={() => handleClick("sports")}>Sports</button>
                        <button className="btn btn-primary m-2" onClick={() => handleClick("entertainment")}>Entertainment</button>
                        { newsData && <CSVLink data={cleanNewsData} className="btn btn-info m-2">Download CSV</CSVLink> }
                        { newsData &&  <button className="btn btn-info m-2" onClick={() => handleExport()}>Export to XLS</button> }
                        { newsData &&  <button className="btn btn-secondary m-2" onClick={() => handleCleanup()}>Clean Data Table</button> }
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <table className="table table-bordered m-3">
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>URL</th>
                            </tr>
                        </thead>

                        <tbody>
                            { newsData && newsData.map((article, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{article.author}</td>
                                        <td>{article.title}</td>
                                        <td>{article.description}</td>
                                        <td>
                                            <NavLink to={article.url}>Read more</NavLink>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-3">
                    <h2>Authors with most articles</h2>
                    <ResponsiveContainer width="80%" height="5%">
                        <PieChart width={200} height={200}>
                            <Pie
                                dataKey="number"
                                nameKey="author"
                                isAnimationActive={false}
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            
        </>
    );
}

export default Table;