import CNote from "../assets/notes_C.mp3";
import DbNote from "../assets/notes_Db.mp3";
import DNote from "../assets/notes_D.mp3";
import EbNote from "../assets/notes_Eb.mp3";
import ENote from "../assets/notes_E.mp3";
import FNote from "../assets/notes_F.mp3";
import GbNote from "../assets/notes_Gb.mp3";
import GNote from "../assets/notes_G.mp3";
import ANote from "../assets/notes_A.mp3";
import AbNote from "../assets/notes_Ab.mp3";
import BNote from "../assets/notes_B.mp3";
import BbNote from "../assets/notes_Bb.mp3";

function playCNote() {
    new Audio(CNote).play();
    // console.log("You clicked C Note!");
}

function playDbNote() {
    new Audio(DbNote).play();
    // console.log("You clicked Db Note!");
}
function playDNote() {
    new Audio(DNote).play();
    // console.log("You clicked D Note!");
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
    playDNote,
    playEbNote,
    playENote,
    playFNote,
    playGbNote,
    playGNote,
    playAbNote,
    playANote,
    playBbNote,
    playBNote
};