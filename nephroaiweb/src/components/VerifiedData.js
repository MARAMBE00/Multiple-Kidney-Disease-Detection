import "./Verified";

function FaqData(props){
    return(
        <div className="verified-card">
            <h4>{props.heading}<i className={props.icon}></i></h4>
            <p>{props.text}</p>
        </div>
    )
}

export default FaqData
 