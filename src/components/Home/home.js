import './Home.css';
import Header from "./components/Header/Header.js.js";
import Tours from "./components/Tours/Tours.js.js";
import Footer from "./components/Footer/Footer.js.js";

export default function Home(props) {
    console.log("props of Home",props);
    return (
        <>
            <Header />
            <Tours />
            <Footer />
        </>
    )
}