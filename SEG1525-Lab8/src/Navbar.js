import phone from "./images/phone.png";
import email from "./images/email.png";
import MainLogo from "./images/MainLogo.png";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <p className="contactInfo"><img src={phone} alt="phone logo" className="phoneIcon" /> (613) 123 - 4567 | <img src={email} alt="email icon" className="emailIcon" /> Ottawa@fencepros.ca</p>
            <p className="navTitle"><img src={MainLogo} alt="Fence Pros logo" className="MainLogo" /> Ottawa Fence Pros</p>
            
        </nav>
     );
}
 
export default Navbar;