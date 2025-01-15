import { useState } from "react";
import { NewsProps } from "../utils/props";
import { fetchNewsData } from "../utils/api";
import { NavLink } from "react-router-dom";

function Table() {
    const [newsData, setNewsData] = useState<NewsProps[]>();

    async function handleClick(topic: string) {
        const result = await fetchNewsData(topic);
        setNewsData(result);
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
                    </div>
                </div>
            </div>
            <div className="container">
                <table className="table tabke-bordered">
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
        </>
    );
}

export default Table;