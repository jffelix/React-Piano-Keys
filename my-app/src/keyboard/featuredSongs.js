import "./featuredSongs.css";

function featuredSongs(props)  {

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    async function iAintWorried() {
        new Audio(props.FNote).play();
        await sleep(500);
        new Audio(props.FNote).play();
        await sleep(250);
        new Audio(props.DNote).play();
        await sleep(250);
        new Audio(props.FNote).play();
        await sleep(500);
        new Audio(props.GNote).play();
        await sleep(250);
        new Audio(props.ANote).play();
        await sleep(1500);
        new Audio(props.ANote).play();
        await sleep(250);
        new Audio(props.ANote).play();
        await sleep(250);
        new Audio(props.GNote).play();
        await sleep(250);
        new Audio(props.GNote).play();
        await sleep(250);
        new Audio(props.FNote).play();
        await sleep(500);
        new Audio(props.ENote).play();
        await sleep(250);
        new Audio(props.GNote).play();
        await sleep(500);
        new Audio(props.GNote).play();
        await sleep(250);
        new Audio(props.FNote).play();
        await sleep(250);
        new Audio(props.FNote).play();
        await sleep(250);
        new Audio(props.ENote).play();
    }

    return (
        <div className="iAintWorried">
            <button onClick={iAintWorried}>I Ain't Worried</button>
        </div>
    )
}

export default featuredSongs;