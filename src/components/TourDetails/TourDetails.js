import './TourDetials.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function TourDetials(props) {
    const [isshowdetails, setshowdetails] = useState(false);
    function showdetails() {
        setshowdetails(!isshowdetails);
    }
    let { id } = useParams();
    var details =props.tourData.filter(element => element.id == id) 
    console.log(details);
    return (
        <>
            <Header />
            <div id="citydiv">
                <p>City :  {details[0].name} </p>
            </div>
            <div id="infodiv">

                {isshowdetails ? details[0].info : `${details[0].info.substring(0, 225)}`}
                {isshowdetails ? <button onClick={showdetails}>see less</button> :
                    <button onClick={showdetails} >see more</button>}
            </div>
            <div id="priceid">
                <img src={details[0].image} />
                <p> price: {details[0].price} </p>
            </div>

            <Footer />
        </>

    )
}