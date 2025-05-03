import S001 from "../images/S001.png";
import S002 from "../images/S002.png";
import S003 from "../images/S003.png";
import "./Content.css";
import ContentData from "./ContentData";

const Content = () =>{
    return(
        <div className="content_primary">
            <div className="content" id="contentLink">
                <h1>A New Way of Getting Healthcare</h1>

                <ContentData className="first-des"
                    heading="Check your symptoms online"
                    text="Don't want to be sick and tired any more?  Our symptom checker uses an advanced AI technology to analyze your symptoms and determine their likelihood of being related to diseases detected by our CT scan tool. With just a few clicks, you can get a percentage of possibility for each disease, providing you with an unprecedented level of insight into your health. Say goodbye to guesswork and hello to accurate health assessments with our online symptom checker, designed to empower you with the knowledge you need to manage your health with confidence."
                    img1={S001}
                />
                <ContentData className="first-des-reverse"
                    heading="Manage your health easily"
                    text="Manage your health with ease and peace of mind. Our AI-powered system approach revolutionizes healthcare, providing you with fast and accurate diagnostic results. Take control of your health today with our user-friendly technology, designed to make managing your well-being simple and stress-free. Join the future of medicine and experience the benefits of seamless health management."
                    img1={S002}
                />
                <ContentData className="first-des"
                    heading="Free of cost"
                    text="Experience the future of healthcare with absolute freedom. Our innovative AI technology is completely free of cost, providing you with world-class nephrological disease diagnosis tools. Empower your medical practice with cutting-edge technology that's always improving and becoming more accessible. Our deep learning techniques deliver fast, accurate results, giving your patients the highest quality of care. Take the first step towards a better future in healthcare with our absolute free of cost tools."
                    img1={S003}
                />
            </div>
        </div>
    );
};

export default Content