import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon";
import { ReactComponent as ExploreIcon } from "../assets/svg/ExploreIcon";
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/PersonOutlineIcon";

function Navbar() {
  return (
    <footer className="Navbar">
      <nav className="navbarNav">
        <ul className="navbarListItem">
          <li className="navbarListItem">
            <ExploreIcon fill="#2c2c2c" width="36px" heigth="36px" />
            <p>Explore</p>
          </li>
          <li className="navbarListItem">
            <OfferIcon fill="#2c2c2c" width="36px" heigth="36px" />
            <p>Offer</p>
          </li>
          <li className="navbarListItem">
            <PersonOutlineIcon fill="#2c2c2c" width="36px" heigth="36px" />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Navbar;
