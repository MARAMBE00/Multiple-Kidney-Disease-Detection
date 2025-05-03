import "./Footer.css";
import Logo from "../images/Logo.png";

const Footer = () => {
    return(
        <div className="footer">
            <div className="frowone">
                <div className="firstcol">
                    <img src={Logo} alt="Logo.png" className="footer-logo"/>
                    <a href="#homeLink" className="footer-name">Nephro AI</a>
                    <p>DISCOVERING HEALTH</p>
                </div>
                <div className="secondcol">
                    <h4>SHORT LINKS</h4>
                    <a href="#homeLink">Home</a>
                    <a href="#uploadLink">Detection</a>
                    <a href="#stageLink">Symptoms</a>
                    <a href="#faqLink">FAQ</a>
                    <a href="#contactLink">Contact Us</a>
                </div>
                <div className="thirdcol">
                    <h4>QUICK REFERENCES</h4>   
                    <a href="#contentLink">Advantages</a>
                    <a href="#verifiedLink">Workflow</a>
                    <a href="#reviewLink">Reviews</a>
                </div>
                <div className="forthcol">
                    <h4>KEEP CONNECTED</h4>   
                    <a href="https://web.facebook.com/NephroAI/" className="socialmedia facebook"><i class="fa-brands fa-facebook"></i>Facebook</a>
                    <a href="https://www.instagram.com/nephroai/" className="socialmedia instagram"><i class="fa-brands fa-instagram"></i>Instagram</a>
                </div>
            </div>
            <div className="frowtwo">
                <p>Copyright © 2023 Nephro AI all rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer