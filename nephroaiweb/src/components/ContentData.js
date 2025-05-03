import { Component } from "react";
import "./Content.css";

class ContentData extends Component{
    render(){
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="content-image">
                    <img alt="img" src={this.props.img1}/>
                </div>
            </div>
        );
    }
}

export default ContentData;