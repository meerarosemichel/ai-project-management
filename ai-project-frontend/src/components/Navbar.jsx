// import { useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { useUser } from "../context/UserContext";
function Navbar() {

    const { user } = useUser();

    const username = user?.username || "Guest";

    return (
        <nav className="navbar">

            <div className="logo">
                AI Project Management
            </div>

            <div className="profile">

              <span>🔔</span>

                <span>
                    Welcome, {username} 👋
                </span>

            </div>

        </nav>
    );
}

export default Navbar;