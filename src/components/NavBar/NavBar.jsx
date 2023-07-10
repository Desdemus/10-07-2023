import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar__container">
            <ul className="Navbar_ul">
                <li className="NavBar__i">
                    <Link to="/home" className="Nav-link">Home</Link>
                </li>
                <li className="NavBar__i">
                    <Link to="/locations" className="Nav-link">Locations</Link>
                </li>
                <li className="NavBar__i">
                    <Link to="/contacts" className="Nav-link">Contacts</Link>
                </li>
                <li className="NavBar__i">
                    <Link to="/about" className="Nav-link">About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;