function Legue(props) {
    const league = props.league;
    return <>
        <th>{league.country}</th>
        <th><img src={league.flag} alt="FLAG" width="30px"/></th>
        <th><img src={league.logo} alt="LOGO" height="22.5px"/></th>
        <th>{league.name}</th>
        <th>{league.round}</th>
    </>
}

export default Legue;