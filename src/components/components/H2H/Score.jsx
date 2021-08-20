function Score(props) {
    const score = props.score;
    return <>
    <th>Extratime {score.extratime.home || 0} : {score.extratime.away || 0}</th>
    <th>Fulltime {score.fulltime.home || 0} : {score.fulltime.away || 0}</th>
    <th>Halftime {score.halftime.home || 0} : {score.halftime.away || 0}</th>
    <th>Penalty {score.penalty.home || 0} : {score.penalty.away || 0}</th>
    </>
}

export default Score;