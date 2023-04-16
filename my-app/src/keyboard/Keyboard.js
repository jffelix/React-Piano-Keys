import './Keyboard.css';
import ANote from "../assets/notes_A.mp3";
import AbNote from "../assets/notes_Ab.mp3";
import BNote from "../assets/notes_B.mp3";
import BbNote from "../assets/notes_Bb.mp3";
import CNote from "../assets/notes_C.mp3";

function Keyboard() {

    function playAbNote() {
        new Audio(AbNote).play();
        console.log("You clicked Ab Note!");
    }

    function playANote() {
        new Audio(ANote).play();
        console.log("You clicked A Note!");
    }

    function playBbNote() {
        new Audio(BbNote).play();
        console.log("You clicked Bb Note!");
    }

    function playBNote() {
        new Audio(BNote).play();
        console.log("You clicked B Note!");
    }

    function playCNote() {
        new Audio(CNote).play();
        console.log("You clicked C Note!");
    }


    return (
        <div>
            <h2>Hello from Keyboard Component!</h2>
            <div className="sharpFlatNotes">
                <button onClick={playAbNote}>Ab</button>
            </div>
            <div className="naturalNotes">
                <button onClick={playANote}>A</button>
            </div>
            <div className="sharpFlatNotes">
                <button onClick={playBbNote}>Bb</button>
            </div>
            <div className="naturalNotes">
                <button onClick={playBNote}>B</button>
            </div>
            <div className="naturalNotes">
                <button onClick={playCNote}>C</button>
            </div>
        </div>
    )
}

export default Keyboard;