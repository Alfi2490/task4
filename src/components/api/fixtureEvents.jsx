async function fixtureEvents() {
    
    const response = await fetch("https://api-football-v1.p.rapidapi.com/v3/fixtures/events?fixture=215662", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "1fd087d49emshcde15c96ccf139ap16a541jsneb018648acc2"
        }    
    })

    return response.json();

}

export default fixtureEvents;

