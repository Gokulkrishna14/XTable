import {  useState } from "react";


const data = [

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

];



export default function Table(){
    const[filteredData, setFilteredData] = useState(data);


    const handleClick= (filerCondition) => {
        let sortedData = [...data];
        if(filerCondition === "date"){
            sortedData.sort((a,b) => new Date(a.date) - new Date(b.date));

        }else if(filerCondition === "views"){
            sortedData.sort((a,b) => b.views - a.views);
        }

        setFilteredData(sortedData);

    };



    return(
        <div>
            <h1>Date and Views Table</h1>
            <button onClick={() => handleClick("date")}>Sort by Date</button>
            <button onClick={() => handleClick("views")}>Sort by Views</button>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Views</th>
                        <th>Article</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((record, index) => (
                        <tr key={index}>
                            <td>{record.date}</td>
                            <td>{record.views}</td>
                            <td>{record.article}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};