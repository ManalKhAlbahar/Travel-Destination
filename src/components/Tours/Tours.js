import './Tours.css';
import Tour from "./Tour/Tour";
import { Link } from "react-router-dom";
export default function Tours(props) {
    console.log("props of Home", props);
    return (

        <>
            {
                props.data.map(data => {
                    return (
                        <Link to={`/city/${data.id}`}>
                            <Tour key={data.id} data={data} />
                        </Link>
                    )
                })
            }
        </>



    )
}



