import './Keyboard.css';
import ANote from "../assets/notes_A.mp3";

function Keyboard() {

    function playANote() {
        new Audio(ANote).play();
        console.log("You clicked playNoteTest!");
    }

    return (
        <div>
            <h2>Hello from Keyboard Component!</h2>
            <div className="naturalNotes">
                <button onClick={playANote}>A</button>
            </div>
            <div className="sharpFlatNotes">
                <button>Ab</button>
            </div>
        </div>
    )
}

export default Keyboard;