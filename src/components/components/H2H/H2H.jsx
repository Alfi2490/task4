import TH from "./TH";

function H2H(props) {

    let tr = [];

    const data = props.data;
    console.log(data[0]);

    tr = data.map((item,i) => <tr key={i}><TH item={item}/></tr>);

    return <div style={{marginTop: '30px'}}>
        <table>
            <tbody>
                {tr}
            </tbody>
        </table>
    </div>
}

export default H2H;