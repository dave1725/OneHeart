import "../App.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { FaDiscord } from "react-icons/fa6";
import { FaSoundcloud } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Footer = () => {
    const handleNavigate = (url) => {
        window.open(url,'_blank');
    };

    const notify = (msg) => {
        toast(`Hi there! Mail us at ${msg}`, {
          icon: '👋',
          duration: 6000,
        });
    }

    return (
        <>
            <div className="footer">
                <div className="footer-area">
                    Copyright @OneHeart 2024<br></br>
                    <div className="footer-links">
                        <div className="media">
                            <AiOutlineInstagram size={25} onClick={() => handleNavigate("https://www.instagram.com/oneheart.srmuap/")}/>
                        </div>
                        <div className="media">
                            <FaSoundcloud  size={25} onClick={() => handleNavigate("https://soundcloud.com/music-club-867464935")}/>
                        </div>
                        <div className="media">
                            <FaSpotify  size={22} onClick={() => handleNavigate("https://open.spotify.com/user/31vle332tn6honh36lhdvcp4u6sm?si=eaa0487d1d0e40b4")}/>
                        </div>
                        
                        <div className="media">
                            <GoMail size={25} onClick={() => notify("club.music@srmap.edu.in")}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;