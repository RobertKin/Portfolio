import "./footerBottom.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";






function FooterBottom() {
    return (
        <>
            <div className="box-1">

                <div className="footer-icon">
                    <div id="icon1" className="icon">
                        <a href="">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                    </div>
                    <div id="icon2" className="icon">
                        <a href="">
                            <FontAwesomeIcon icon={faInstagramSquare} />
                        </a>
                    </div>
                    <div id="icon3" className="icon">
                        <a href="">
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                    </div>
                    <div id="icon4" className="icon">
                        <a href="">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        copyright &copy 2022 Designed by <span>R & O</span>
                    </p>
                </div>
            </div>
        </>
    );
}

export default FooterBottom;