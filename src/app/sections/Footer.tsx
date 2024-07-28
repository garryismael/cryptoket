import Logo from "../components/Logo";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillDiscord } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <Logo />
        <h1 className="text-lg font-semibold">Get the latest Updates</h1>
        <form>
          <input
            placeholder="Your Email"
            className="text-sm"
          />
          <button className="text-base font-semibold">Email me!</button>
        </form>
      </div>
      <div className="links">
        <div className="company">
          <h3 className="heading-3">CryptoKet</h3>
          <ul>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">How it Works</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="support">
          <h3 className="heading-3">Support</h3>
          <ul>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Legal</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider"></div>
      <div className="copyright">
        <p className="text-lg font-semibold">CryptoKet, Inc. All Rights Reserved</p>
        <div className="icons">
          <FaInstagram /> <FaXTwitter /> <FaTelegramPlane /> <AiFillDiscord />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
