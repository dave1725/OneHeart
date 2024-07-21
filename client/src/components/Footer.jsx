import "../App.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { FaDiscord } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-area">
                    Copyright @OneHeart 2024<br></br>
                    <div className="footer-links">
                    <div className="media">
                        <AiOutlineInstagram size={25}/>
                    </div>
                    <div className="media">
                        <FaDiscord size={25}/>
                    </div>
                    <div className="media">
                        <GoMail size={25}/>
                    </div>
                    </div>
                    
                </div>
            </div>
        
        </>
    );
}

export default Footer;