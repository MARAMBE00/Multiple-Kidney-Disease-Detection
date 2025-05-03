import {Component} from "react";
import "./NavbarStyles.css";

class Navbar extends Component{
    state = {clicked : false};
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <a href="#homeLink" className="navbar-logo-name">Nephro AI</a>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className="nav-menu">
                    <li>
                        <a className="nav-links" href="#homeLink">
                            HOME
                        </a>
                        <a className="nav-links" href="#uploadLink">
                            DETECTION
                        </a>
                        <a className="nav-links" href="#stageLink">
                            SYMPTOMS
                        </a>
                        <a className="nav-links" href="#faqLink">
                            FAQ
                        </a>
                        <a className="nav-links" href="#contactLink">
                            CONTACT US
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
} 

export default Navbar;