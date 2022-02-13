import './Home.css';
import Header from "../Header/Header.js";
import Tours from "../Tours/Tours.js";
import Footer from "../Footer/Footer.js";

export default function Home(props) {
    console.log("props of Home",props);
    return (
        <>
            <Header />
            <Tours key={props.tourData} data={props.tourData} />
            <Footer />
        </>
    )
}