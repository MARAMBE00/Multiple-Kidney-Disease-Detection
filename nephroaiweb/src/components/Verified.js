import "./Verified.css";
import VerifiedData from "./VerifiedData";

function Verified(){
    return(
        <div className="verified" id="verifiedLink">
            <h1>Our Workflow</h1>
            <div className="firstrow">
                <VerifiedData
                    heading="Medical Report from Home"
                    icon="fa-sharp fa-solid fa-house"
                    text="Our systems were designed to deliver reliable reports from your home without a hustle of multiple
                    consultations and service fees."
                />
                <VerifiedData
                    heading="Upload CT Scan"
                    icon="fa-solid fa-cloud-arrow-up"
                    text="Despite traditional workflows, CT reports are accepted one-per-session with an unlimited attempts 
                    for an uninterrupted service."
                />
                <VerifiedData
                    heading="Deep Learning"
                    icon="fa-solid fa-brain"
                    text="The uploaded file would be processed using various types of Deep Learning techniques such as 
                    Supervised Learning and Unsupervised Learning."
                />
            </div>
            <div className="secondrow">
                <VerifiedData
                    heading="Answer Questions"
                    icon="fa-solid fa-circle-question"
                    text="An effective way to draw conclusions regarding the detected disease is by answering symptoms related queries.
                    However, this feature is currently not available."
                />
                <VerifiedData
                    heading="Unsupervised Learning"
                    icon="fa-sharp fa-solid fa-magnifying-glass-chart"
                    text="Our systems were trained using a large amount of CT image samples to classify diseases. This can help strengthen
                    the predicted results without a human intervention."
                />
                <VerifiedData
                    heading="Conclusion"
                    icon="fa-solid fa-handshake"
                    text="The final conclusion regarding diseases will be drawn by considering results from various Machine Learning techniqures.
                    It is also expected to consider symptoms in future."
                />
            </div>
        </div>
    );
}

export default Verified