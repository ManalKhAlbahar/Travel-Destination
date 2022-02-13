import './Tours.css';
export default function Tours(props) {
    console.log("props of Home", props);
    return (

        <>
            {
                props.data.map(data => {
                    console.log(data);
                    return (
                        <div className='divname' key={data}>
                            <p id='name'>  City :  {data.name}</p>
                            <img src={data.image} />
                        </div>
                    )
                })
            }
        </>

    )
}
