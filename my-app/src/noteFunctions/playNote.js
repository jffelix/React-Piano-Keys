import CNote from "../assets/notes_C.mp3";
import DbNote from "../assets/notes_Db.mp3";
import DNote from "../assets/notes_D.mp3";

function playCNote() {
    new Audio(CNote).play();
    console.log("You clicked C Note!");
}

function playDbNote() {
    new Audio(DbNote).play();
    console.log("You clicked Db Note!");
}
function playDNote() {
    new Audio(DNote).play();
    console.log("You clicked D Note!");
}

function playEbNote() {
    new Audio(EbNote).play();
    // console.log("You clicked Eb Note!");
}

function playENote() {
    new Audio(ENote).play();
    // console.log("You clicked E Note!");
}

function playFNote() {
    new Audio(FNote).play();
    // console.log("You clicked F Note!");
}

function playGbNote() {
    new Audio(GbNote).play();
    // console.log("You clicked Gb Note!");
}

function playGNote() {
    new Audio(GNote).play();
    // console.log("You clicked G Note!");
}

function playAbNote() {
    new Audio(AbNote).play();
    // console.log("You clicked Ab Note!");
}

function playANote() {
    new Audio(ANote).play();
    // console.log("You clicked A Note!");
}

function playBbNote() {
    new Audio(BbNote).play();
    // console.log("You clicked Bb Note!");
}

function playBNote() {
    new Audio(BNote).play();
    // console.log("You clicked B Note!");
}

export default {
    playCNote,
    playDbNote,
    playDNote
};