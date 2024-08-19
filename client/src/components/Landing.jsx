import "../App.css";
import Navbar from "./Navbar";
import { CgMail } from "react-icons/cg";
import { AiOutlineInstagram } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import { FaDiscord } from "react-icons/fa6";
import { FaSoundcloud } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import toast, { Toaster } from 'react-hot-toast';

const Landing = () => {

  const notify = (msg) => {
    toast(`Hi there! Reach me @${msg}`, {
      icon: '👋',
      duration: 5000,
    });
  }

  const mail = (msg) => {
    toast(`Hi there! Mail me at ${msg}`, {
      icon: '📩',
      duration: 6000,
    })
  }

  const handleNavigate = (url) => {
    window.open(url,'_blank');
  };

  return (
    <>
      <Navbar />
      <div className="landing-outer-container">
        <div className="toast">
          <b>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        </b>
        </div>
        
        <div className="landing-hero-container">
          <section className="wrapper">
            <div className="top">OneHeart</div>
            <div className="bottom" aria-hidden="true">OneHeart</div>
          </section>
          <div className="container-content">
            <p>WELCOME TO THE MUSIC CLUB OF SRM-AP</p>
          </div>
        </div>
        <div className="team-intro">
          <div className="flux">Meet the</div>
          <div className="neon">Team</div>
        </div>

        <div className="responsive-container-block outer-container">
          <div className="responsive-container-block inner-container">
            <div className="responsive-container-block">
              <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                <div className="team-card">
                  <div className="img-wrapper">
                    <img className="team-img" src="https://drive.google.com/thumbnail?id=1088JYRKku2ZbhYwLZJwwl1Qpc_0Iy2Fa&sz=w1000" />
                  </div>
                  <p className="text-blk name">
                    Mr.Venkat
                  </p>
                  <p className="text-blk position">
                    Mentor, SA
                  </p>
                  <div className="social-media-links">
                    <div className="media" onClick={() => mail("venkatarathnam.v@srmap.edu.in")} >
                      <GoMail size={20} />
                    </div>
                    <div className="media">
                      <FaDiscord size={20} onClick={() => notify("musicteacher1")}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                <div className="team-card">
                  <div className="img-wrapper">
                    <img className="team-img" src="https://drive.google.com/thumbnail?id=1GqN2lEry0mDZt69U4wO_yevjtD4Jgf2C&sz=w1000" />
                  </div>
                  <p className="text-blk name">
                    Dave
                  </p>
                  <p className="text-blk position">
                    Convenor
                  </p>
                  <div className="social-media-links">
                    <div className="media">
                      <GoMail size={20} onClick={() => mail("davemeshak_j@srmap.edu.in")} />
                    </div>
                    <div className="media">
                      <FaDiscord size={20} onClick={() => notify("_dave1725")}/>
                    </div>
                    <div className="media">
                      <AiOutlineInstagram size={20} onClick={() => handleNavigate("https://instagram.com/_dave_1725")}/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                <div className="team-card">
                  <div className="img-wrapper">
                    <img className="team-img" src="https://drive.google.com/thumbnail?id=1bf-v0KMMQWg9uGiJjqUd-5aFj8vCHgYA&sz=w1000" />
                  </div>
                  <p className="text-blk name">
                    Nitya Sri
                  </p>
                  <p className="text-blk position">
                    Co-Convenor
                  </p>
                  <div className="social-media-links">
                    <div className="media">
                      <GoMail size={20} onClick={() => mail("nithyasri_vadapalli@srmap.edu.in")}/>
                    </div>
                    <div className="media">
                      <FaDiscord size={20} onClick={() => notify("nithya1408")}/>
                    </div>
                    <div className="media">
                      <AiOutlineInstagram size={20} onClick={() => handleNavigate("https://www.instagram.com/philocalist_8145/")} />
                    </div>
                   
                  </div>
                </div>
              </div>
              <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                <div className="team-card">
                  <div className="img-wrapper">
                    <img className="team-img" src="https://drive.google.com/thumbnail?id=1G1uZ1_MOhgvNCtB-QfqT4ix1RrowHCZH&sz=w1000" />
                  </div>
                  <p className="text-blk name">
                    Prasanna K
                  </p>
                  <p className="text-blk position">
                    Co-Convenor
                  </p>
                  <div className="social-media-links">
                    <div className="media">
                      <GoMail size={20} onClick={() => mail("prasannakumar_katari@srmap.edu.in")}/>
                    </div>
                    <div className="media">
                      <FaDiscord size={20} onClick={() => notify("prassukk")}/>
                    </div>
                    <div className="media">
                      <AiOutlineInstagram size={20} onClick={() => handleNavigate("https://www.instagram.com/prassu_k.k/")}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
