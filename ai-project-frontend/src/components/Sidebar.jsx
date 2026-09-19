import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/logout")
    };

    return (
        <aside className="sidebar">

            <h2>MENU</h2>

            <ul>

                <li>
                    <NavLink to="/dashboard">
                        🏠 Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/projects">
                        📁 Projects
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/create-project">
                        ➕ Create Project
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/ai-planner">
                        🤖 AI Planner
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/risk-prediction">
                        ⚠️ Risk Prediction
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/resource-allocation">
                        👥 Resource Allocation
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/progress">
                        📈 Progress Tracking
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/budget">
                        💰 Budget Tracking
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/reports">
                        📄 Reports
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/settings">
                        ⚙️ Settings
                    </NavLink>
                </li>

                <li>
                    <button
                        className="logout-button"
                        onClick={handleLogout}
                    >
                        🚪 Logout
                    </button>
                </li>

            </ul>

        </aside>
    );
}

export default Sidebar;