import Navbar from "./Navbar";
import { useRef } from "react";
import { PiStudentFill } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";
import { BsAwardFill } from "react-icons/bs";

const Achievements = () => {
    const scrollToNewDiv = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Navbar />
            <div className="a-outer-container">
                <div className="a-inner-container">
                    <div className="a-title">
                        <p>Our Success Stories 💫</p>
                        <div className="underline"></div>
                    </div>
                    <div className="fame-card">
                        <div className="info">
                            <PiStudentFill size={110}/>
                            <p className="info-1"><b>100+</b></p>
                            <p className="info-2">Members Participated</p>
                        </div>
                        <div className="info">
                            <FaUniversity size={110}/>
                            <p className="info-1"><b>4</b></p>
                            <p className="info-2">Universities Conquered</p>
                        </div>
                        <div className="info">
                            <GiDiamondTrophy size={110}/>
                            <p className="info-1"><b>10+</b></p>
                            <p className="info-2">Trophies Lifted</p>
                        </div>
                        <div className="info">
                            <BsAwardFill size={110}/>
                            <p className="info-1"><b>Rs 10k+</b></p>
                            <p className="info-2">Awards Received</p>
                        </div>
                    </div>
                </div>
                <div className="content a-content">
                <svg id="more-arrows" onClick={scrollToNewDiv}>
                    <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                    <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                    <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
                </svg>
            </div>
            </div>

        </>
    );
}

export default Achievements;