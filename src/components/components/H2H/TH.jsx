import Goals from "./Goals";
import Legue from "./Legue";
import Score from "./Score";

function TH(props) {

    const item = props.item;

    return <>
        <Goals goals={item.goals} />
        <Legue league={item.league} />
        <Score score={item.score} />
    </>
}

export default TH;