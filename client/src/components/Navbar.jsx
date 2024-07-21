import { NavLink, useNavigate } from 'react-router-dom';
import "../App.css";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const navigation = useNavigate();
    
    return (
        <>
            <div className="navbar">
                <div className='navbar-logo'>
                    <img src={Logo} height='80px' width='100px'/>
                </div>
                <div className="navigations">
                    <NavLink id="navigator" to="/" title='About Us'>About us</NavLink>
                    <NavLink id="navigator" to="/achievements" title='Achievements'>Achievements</NavLink>
                    <NavLink id="navigator" to="/members" title='Members'>Members</NavLink>
                </div>
            </div>
        </>
    );
}

export default Navbar;