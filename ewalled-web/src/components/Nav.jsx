import "../styles/components/Nav.css";
import logo from "../assets/logo.svg";
import mode from "../assets/mode.svg";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <img
        src={logo}
        height="40px"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      />
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Dashboard
        </Link>
        <Link to="/transfer" className="nav-link">
          Transfer
        </Link>
        <Link to="/topup" className="nav-link">
          Topup
        </Link>
        <Link to="/login" className="nav-link">
          Sign Out
        </Link>
        <div className="vertical-line" />
        <a href="#" className="nav-link" id="mode">
          <img src={mode} height="26px" width="26px" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
