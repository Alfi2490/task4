function Goals(props){
    const goals = props.goals;
    return <>
        <th>Goals:</th>
        <th>{goals.home}</th>
        <th>{goals.away}</th>
    </>
}

export default Goals;
