const DomoList = (props) => {
        console.log(props.domos);
        if(props.domos.length === 0){
        console.log('domoList none');
        return (
            <div className='domoList'>
                <h3 className='emptyDomo'>No Domos Yet</h3>
            </div>
        );
    }
    const domoNodes = props.domos.map(domo => {
        console.log('domoList mapping');
        return (
            <div key={domo._id} className="domo">
                <img src='/assets/img/domoface.jpeg' alt="domo face" className='domoFace' />
                <h3 className='domoName'>Name: {domo.name}</h3>
                <h3 className='domoAge'>Age: {domo.age}</h3>
                <h3 className='domoColor'>Color: {domo.color}</h3>
            </div>
        );
    });
    return (
        console.log('domoList return'),
        <div className="domoList">
            {domoNodes}
        </div>
    );
    }
    

const loadDomosFromServer = async () =>{
    console.log('domoList load');
    const response = await fetch('/allDomos');
    const data = await response.json();
    console.log(data.domos);
    ReactDOM.render(
        <DomoList domos={data.domos} />,
        document.getElementById('domos')
    );
}

const init = async () => {
    console.log('init');
    ReactDOM.render(
        <DomoList domos={[]} />,
        document.getElementById('domos')
    );
    loadDomosFromServer();
}
window.onload = init;