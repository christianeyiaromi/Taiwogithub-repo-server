import "./header.module.css";
import { IoMenuOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  open = () => (document.querySelector(".mobile").style.display = "flex");
  close = () => (document.querySelector(".mobile").style.display = "none");
  return (
    <header>
      <h2>
        Taiwo's <span>portfolio</span>
      </h2>
      <nav className="nav-link">
        <ul className="nav-menu1">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Repositories">Repository</Link>
          </li>
          <li>
            <Link>Create Repository</Link>
          </li>
        </ul>
      </nav>
      <button className="button-btn">Go to Github</button>
      <IoMenuOutline className="open-sidebar" onClick={open} />
      <nav className="mobile">
        <IoCloseSharp className="close-sidebar" onClick={close} />
        <ul className="nav-menu">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Repositories">Repository</Link>
          </li>
          <li>
            <Link>Create Repository</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
