import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

    useEffect(() => {
        getTitle();
    }, []);

    const [ mainTitle, setMainTitle ] = useState("");

    const getTitle = async () => {
        try {
            const title = await axios.get("/title");
            setMainTitle(title.data);
        } catch(err) {
            console.log("Error received from getTitle", err);
        }
    }

    return (
        <div>
            <h1>{mainTitle}</h1>
        </div>
    )

}

export default App;