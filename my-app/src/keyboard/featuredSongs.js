import "./featuredSongs.css";

function featuredSongs(props)  {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    async function iAintWorried() {
        new Audio(props.FNote).play();
        props.toggleKeyColorF();
        await sleep(500);
        new Audio(props.FNote).play();
        props.toggleKeyColorF();
        await sleep(250);
        new Audio(props.DNote).play();
        props.toggleKeyColorD();
        await sleep(250);
        new Audio(props.FNote).play();
        props.toggleKeyColorF();
        await sleep(500);
        new Audio(props.GNote).play();
        props.toggleKeyColorG();
        await sleep(250);
        new Audio(props.ANote).play();
        props.toggleKeyColorA();
        await sleep(1500);
        new Audio(props.ANote).play();
        props.toggleKeyColorA();
        await sleep(250);
        new Audio(props.ANote).play();
        props.toggleKeyColorA();
        await sleep(250);
        new Audio(props.GNote).play();
        props.toggleKeyColorG();
        await sleep(250);
        new Audio(props.GNote).play();
        props.toggleKeyColorG();
        await sleep(250);
        new Audio(props.FNote).play();
        props.toggleKeyColorF();
        await sleep(500);
        new Audio(props.ENote).play();
        props.toggleKeyColorE();
        await sleep(250);
        new Audio(props.GNote).play();
        props.toggleKeyColorG();
        await sleep(500);
        new Audio(props.GNote).play();
        props.toggleKeyColorG();
        await sleep(250);
        new Audio(props.FNote).play();
        props.toggleKeyColorF();
        await sleep(250);
        new Audio(props.FNote).play();
        props.toggleKeyColorF();
        await sleep(250);
        new Audio(props.ENote).play();
        props.toggleKeyColorE();
    }

    return (
        <div className="iAintWorried">
            <button onClick={iAintWorried}>I Ain't Worried</button>
        </div>
    )
}

export default featuredSongs;