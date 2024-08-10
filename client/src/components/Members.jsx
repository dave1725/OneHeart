import Footer from "./Footer";
import Navbar from "./Navbar";
import { CgMail } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { FaDiscord } from "react-icons/fa6";
import React from "react";
import { useRef } from "react";
import members from "./constants/members";

const Members = () => {
    const scrollRef = useRef(null);

    const scrollToNewDiv = () => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Navbar />
            <div className="title">
                <div className="text text-1">The</div>
                <div className="text text-2">Club's</div>
                <div className="text text-3">Heart</div>
            </div>
            <div className="sub-title">
                <p>At the heart of the club, there are about 20+ singers 🎤 and 10+ instrumentalists 🎸🎻 
                    performing Western, Eastern, Classical, and Hindustani music!</p>
            </div>
            <div className="content">
                <svg id="more-arrows" onClick={scrollToNewDiv}>
                    <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
                    <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
                    <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
                </svg>
            </div>
            <div ref={scrollRef} className="responsive-container-block outer-container new">
                <div className="responsive-container-block inner-container">
                    <div className="responsive-container-block">
                        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container new-card">
                            <div className="team-card">
                                <div className="img-wrapper">
                                    <img className="team-img" src="https://drive.google.com/thumbnail?id=1GqN2lEry0mDZt69U4wO_yevjtD4Jgf2C&sz=w1000" />
                                </div>
                                <p className="text-blk name">
                                    Dave
                                </p>
                                <p className="text-blk position">
                                    Pianist 🎹
                                </p>
                               
                            </div>
                        </div>
                        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container new-card">
                            <div className="team-card">
                                <div className="img-wrapper">
                                    <img className="team-img" src="https://drive.google.com/thumbnail?id=1bf-v0KMMQWg9uGiJjqUd-5aFj8vCHgYA&sz=w1000" alt="None"/>
                                </div>
                                <p className="text-blk name">
                                    Nithya Sri
                                </p>
                                <p className="text-blk position">
                                    Est/Classical Singer 🎤
                                </p>
                            </div>
                        </div>

                        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container new-card">
                            <div className="team-card">
                                <div className="img-wrapper">
                                    <img className="team-img" src="https://drive.google.com/thumbnail?id=1G1uZ1_MOhgvNCtB-QfqT4ix1RrowHCZH&sz=w1000"/>
                                </div>
                                <p className="text-blk name">
                                    Prasanna K
                                </p>
                                <p className="text-blk position">
                                    Drummer 🥁
                                </p>
                            </div>
                        </div>

                        {members.map((item, index) => (
                            <div key={index} className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container new-card">
                                <div className="team-card">
                                    <div className="img-wrapper">
                                        <img className="team-img" src={item.dp} alt={`Team member ${index}`} />
                                    </div>
                                    <p className="text-blk name">
                                        {item.name}
                                    </p>
                                    <p className="text-blk position">
                                        {item.cat}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Members;