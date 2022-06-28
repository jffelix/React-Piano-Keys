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
            <div className="mainTitle">
                <h1>{mainTitle}</h1>
            </div>
            <div className="naturalNotes">
                <button>F</button>
                <button>G</button>
                <button>A</button>
                <button>B</button>
                <button>C</button>
                <button>D</button>
                <button>E</button>
            </div>
            <div className="sharpsAndFlats">
                <button>F#/Gb</button>
                <button>G#/Ab</button>
                <button>A#/Bb</button>
                <button>C#/Db</button>
                <button>D#/Eb</button>
            </div>
        </div>
    )

}

export default App;