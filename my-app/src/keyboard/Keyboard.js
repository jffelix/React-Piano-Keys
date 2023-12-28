import { useState, useEffect } from "react";
import './Keyboard.css';
import FeaturedSongs from './featuredSongs.js';

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

import playNote from "../noteFunctions/playNote.js";

function Keyboard() {

    const [ backgroundColorC, setBackgroundColorC ] = useState('white');
    const [ backgroundColorDb, setBackgroundColorDb ] = useState('black');
    const [backgroundColorD, setBackgroundColorD ]  = useState('white');
    const [ backgroundColorEb, setBackgroundColorEb ] = useState('black');
    const [backgroundColorE, setBackgroundColorE ]  = useState('white');
    const [backgroundColorF, setBackgroundColorF ]  = useState('white');
    const [ backgroundColorGb, setBackgroundColorGb ] = useState('black');
    const [backgroundColorG, setBackgroundColorG ]  = useState('white');
    const [ backgroundColorAb, setBackgroundColorAb ] = useState('black');
    const [backgroundColorA, setBackgroundColorA ]  = useState('white');
    const [ backgroundColorBb, setBackgroundColorBb ] = useState('black');
    const [backgroundColorB, setBackgroundColorB ]  = useState('white');

    // function playCNote() {
    //     new Audio(CNote).play();
    //     // console.log("You clicked C Note!");
    // }

    // function playDbNote() {
    //     new Audio(DbNote).play();
    //     // console.log("You clicked Db Note!");
    // }

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

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function toggleKeyColorC() {
        setBackgroundColorC('yellow');
        await sleep(250);
        setBackgroundColorC('white');
    }

    async function toggleKeyColorDb() {
        setBackgroundColorDb('yellow');
        await sleep(250);
        setBackgroundColorDb('black');
    }

    async function toggleKeyColorD() {
        setBackgroundColorD('yellow');
        await sleep(250);
        setBackgroundColorD('white');
    }

    async function toggleKeyColorEb() {
        setBackgroundColorEb('yellow');
        await sleep(250);
        setBackgroundColorEb('black');
    }

    async function toggleKeyColorE() {
        setBackgroundColorE('yellow');
        await sleep(250);
        setBackgroundColorE('white');
    }

    async function toggleKeyColorF() {
        setBackgroundColorF('yellow');
        await sleep(250);
        setBackgroundColorF('white');
    }

    async function toggleKeyColorGb() {
        setBackgroundColorGb('yellow');
        await sleep(250);
        setBackgroundColorGb('black');
    }

    async function toggleKeyColorG() {
        setBackgroundColorG('yellow');
        await sleep(250);
        setBackgroundColorG('white');
    }

    async function toggleKeyColorAb() {
        setBackgroundColorAb('yellow');
        await sleep(250);
        setBackgroundColorAb('black');
    }

    async function toggleKeyColorA() {
        setBackgroundColorA('yellow');
        await sleep(250);
        setBackgroundColorA('white');
    }

    async function toggleKeyColorBb() {
        setBackgroundColorBb('yellow');
        await sleep(250);
        setBackgroundColorBb('black');
    }

    async function toggleKeyColorB() {
        setBackgroundColorB('yellow');
        await sleep(250);
        setBackgroundColorB('white');
    }

    // useEffect(() => {
    //     window.addEventListener('keydown', e => {
    //         if(e.key === 'a'){
    //             playCNote();
    //             toggleKeyColorC();
    //         }
    //     })
    // })

    return (
        <div>
            <div className ="keyboard">
                <div className="naturalNotes">
                    <div className="naturalC">
                        <button 
                        style={{background: backgroundColorC}}
                        onClick={() => {
                            playNote.playCNote();
                            toggleKeyColorC();
                            }}>C</button>
                    </div>
                </div>
                <div className="sharpFlatNotes">
                    <div className="DFlat">
                        <button 
                        style={{background: backgroundColorDb}}                   
                        onClick={() => {
                            playNote.playDbNote();
                            // playDbNote();
                            toggleKeyColorDb();
                        }}>Db / C#</button>
                    </div>
                </div>
                <div className="naturalNotes">
                    <div className="naturalD">
                        <button 
                        style={{background: backgroundColorD}}
                        onClick={() => {
                            playNote.playDNote();
                            toggleKeyColorD();
                        }}>D</button>
                    </div>
                </div>
                <div className="sharpFlatNotes">
                    <div className="EFlat">
                        <button 
                        style={{background: backgroundColorEb}}
                        onClick={() => {
                            playEbNote();
                            toggleKeyColorEb();
                        }}>Eb / D#</button>
                    </div>
                </div>
                <div className="naturalNotes">
                    <div className="naturalE">
                        <button 
                        style={{background: backgroundColorE}}
                        onClick={() => {
                            playENote();
                            toggleKeyColorE();
                        }}>E</button>
                    </div>
                </div>
                <div className="naturalNotes">
                    <div className="naturalF">
                        <button 
                        style={{background: backgroundColorF}}
                        onClick={() => {
                            playFNote();
                            toggleKeyColorF();
                        }}>F</button>
                    </div>
                </div>
                <div className="sharpFlatNotes">
                    <div className="GFlat">
                        <button 
                        style={{background: backgroundColorGb}}
                        onClick={() => {
                            playGbNote();
                            toggleKeyColorGb();
                        }}>Gb / F#</button>
                    </div>
                </div>
                <div className="naturalNotes">
                    <div className="naturalG">
                        <button 
                        style={{background: backgroundColorG}}
                        onClick={() => {
                            playGNote();
                            toggleKeyColorG();
                        }}>G</button>
                    </div>
                </div>
                <div className="sharpFlatNotes">
                    <div className="AFlat">
                        <button 
                        style={{background: backgroundColorAb}}
                        onClick={() => {
                            playAbNote();
                            toggleKeyColorAb();
                        }}>Ab / G#</button>
                    </div>
                </div>
                <div className="naturalNotes">
                    <div className="naturalA">
                        <button 
                        style={{background: backgroundColorA}}
                        onClick={() => {
                            playANote();
                            toggleKeyColorA();
                        }}>A</button>
                    </div>
                </div>
                <div className="sharpFlatNotes">
                    <div className="BFlat">
                        <button 
                        style={{background: backgroundColorBb}}
                        onClick={() => {
                            playBbNote();
                            toggleKeyColorBb();
                        }}>Bb / A#</button>
                    </div>
                </div>
                <div className="naturalNotes">
                    <div className="naturalB">
                        <button 
                        style={{background: backgroundColorB}}
                        onClick={() => {
                            playBNote();
                            toggleKeyColorB();
                        }}>B</button>
                    </div>
                </div>
            </div>
            <div>
                <FeaturedSongs
                CNote={CNote}
                DbNote={DbNote}
                DNote={DNote}
                EbNote={EbNote}
                ENote={ENote}
                FNote={FNote}
                GbNote={GbNote}
                GNote={GNote}
                AbNote={AbNote}
                ANote={ANote}
                BbNote={BbNote}
                BNote={BNote}
                toggleKeyColorC={toggleKeyColorC} 
                toggleKeyColorDb={toggleKeyColorDb} 
                toggleKeyColorD={toggleKeyColorD}
                toggleKeyColorEb={toggleKeyColorEb}  
                toggleKeyColorE={toggleKeyColorE} 
                toggleKeyColorF={toggleKeyColorF}
                toggleKeyColorGb={toggleKeyColorGb}  
                toggleKeyColorG={toggleKeyColorG}
                toggleKeyColorAb={toggleKeyColorAb} 
                toggleKeyColorA={toggleKeyColorA}
                toggleKeyColorBb={toggleKeyColorBb}
                toggleKeyColorB={toggleKeyColorB}  
                />
            </div>
        </div>
    )
}

export default Keyboard;