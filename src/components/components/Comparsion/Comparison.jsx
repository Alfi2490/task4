function Comparison(props) {

    let keys, values, trV, trK  = [];

    const data = props.data;
    
    keys = Object.keys(data);
    values = Object.values(data);

    trV = values.map((item,i) => <tr key={i}><th>{item.home}</th><th>{item.away}</th></tr>);
    trK = keys.map((name,i) => <tr key={i}><th>{name}</th></tr>);

    return <div style={{marginTop: '30px'}}>
        <table style={{width:'300px', float:'left', marginLeft:'100px'}}>
            <tbody>
            {trK}
            </tbody>
        </table>
        <table style={{width:'600px', marginLeft:'30px'}}>
            <tbody>
                {trV}
            </tbody>
        </table>
    </div>
    
}

export default Comparison;