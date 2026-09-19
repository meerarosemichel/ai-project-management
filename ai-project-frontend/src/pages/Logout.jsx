import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

function Logout() {

    const navigate = useNavigate();
    const { logout } = useUser();

    useEffect(() => {

        // Clear logged-in user
        logout();

        // Go back to login page
        navigate("/", { replace: true });

    }, [logout, navigate]);


    return (
        <div>
            Logging out...
        </div>
    );
}

export default Logout;