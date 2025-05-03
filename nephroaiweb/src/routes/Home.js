import Content from "../components/Content";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Stage from "../components/Stage";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Review from "../components/Review";
import Verified from "../components/Verified";
import Faq from "../components/Faq";
import FileUpload from "../components/FileUpload";
import "./Home.css";
import mng from "../images/home_main.png";

function Home(){
    return(
        <>
            <Navbar />
            <Hero
            cName="hero" 
            heroImg={mng}
            // heroImg="https://img.freepik.com/free-vector/medics-working-charts_1262-19836.jpg?w=1060&t=st=1679463643~exp=1679464243~hmac=450ac19b8942b5a9b3ee025978042bbb9b19714622ba0810ed7eec5c1a776392"
            title1="NEPHROLOGICAL"
            title2="DISEASE DETECTION"
            text="Revolutionize your nephrological disease diagnosis with our cutting-edge AI technology. Our deep learning algorithms accurately detect multiple diseases in real-time, providing you with fast and reliable results. Experience the future of medicine with our AI-powered solution, and give your patients the care they deserve."
            buttonText="Get Started"
            href="#contentLink"
            btnClass="show"
            />
            <Content />
            <Stage />
            <FileUpload />
            <Verified />
            <Faq />
            <Review />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;