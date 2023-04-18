import "./featuredSongs.css";

function FeaturedSongs(props)  {

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

    async function shelter() {
        new Audio(props.CNote).play();
        props.toggleKeyColorC();
        await sleep(750);
        new Audio(props.ANote).play();
        props.toggleKeyColorA();
        await sleep(250);
        new Audio(props.GNote).play();
        props.toggleKeyColorG();
        await sleep(500);
        new Audio(props.CNote).play();
        props.toggleKeyColorC();
        await sleep(1000);
        new Audio(props.CNote).play();
        props.toggleKeyColorC();
        await sleep(750);
        new Audio(props.ANote).play();
        props.toggleKeyColorA();
        await sleep(250);
        new Audio(props.GNote).play();
        props.toggleKeyColorG();
        await sleep(500);
        new Audio(props.DNote).play();
        props.toggleKeyColorD();
        await sleep(750);
        // 8 count
        new Audio(props.DNote).play();
        props.toggleKeyColorD();
        await sleep(250);
        new Audio(props.CNote).play();
        props.toggleKeyColorC();
        await sleep(500);
        new Audio(props.CNote).play();
        props.toggleKeyColorC();
        await sleep(750);
        new Audio(props.ANote).play();
        props.toggleKeyColorA();
        await sleep(250);
        new Audio(props.GNote).play();
        props.toggleKeyColorG();
        await sleep(500);
        new Audio(props.CNote).play();
        props.toggleKeyColorC();
        await sleep(1000);
        // 8 count
        new Audio(props.ENote).play();
        props.toggleKeyColorE();
        await sleep(500);
        new Audio(props.ENote).play();
        props.toggleKeyColorE();
        await sleep(250);
        new Audio(props.CNote).play();
        props.toggleKeyColorC();
        await sleep(250);
        new Audio(props.DNote).play();
        props.toggleKeyColorD();
        await sleep(250);
        new Audio(props.ENote).play();
        props.toggleKeyColorE();
        await sleep(250);
        new Audio(props.CNote).play();
        props.toggleKeyColorC();
        await sleep(250);
        new Audio(props.DNote).play();
        props.toggleKeyColorD();
        await sleep(250);
        new Audio(props.ENote).play();
        props.toggleKeyColorE();
        await sleep(250);
        new Audio(props.CNote).play();
        props.toggleKeyColorC();
        await sleep(250);
        new Audio(props.DNote).play();
        props.toggleKeyColorD();
        await sleep(250);
        new Audio(props.ENote).play();
        props.toggleKeyColorE();
        await sleep(250);
        new Audio(props.CNote).play();
        props.toggleKeyColorC();
        await sleep(250);
        new Audio(props.DNote).play();
        props.toggleKeyColorD();
        await sleep(250);
        new Audio(props.CNote).play();
        props.toggleKeyColorC();
        await sleep(1000);
    }

    return (
        <div className="featuredSongs">
            <button onClick={iAintWorried}>I Ain't Worried</button>
            <button onClick={shelter}>Shelter</button>
        </div>
    )
}

export default FeaturedSongs;