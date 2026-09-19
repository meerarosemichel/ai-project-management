import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Login.css";
import { useUser } from "../context/UserContext";
function Login() {
    const navigate = useNavigate();
    const { setUser } = useUser();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleLogin = (event) => {
        event.preventDefault();

        if (
            formData.username === "" ||
            formData.email === "" ||
            formData.password === ""
        ) {
            alert("Please fill all fields.");
            return;
        }
        // setUser({
        //     username: formData.username,
        //     email: formData.email,
        // });

        alert("Login Successful!");

        navigate("/dashboard");
    };
    return (
        <div className="login-container">
            <div className="login-card">

                <h1>AI Project Management</h1>

                <p className="subtitle">
                    Sign in to continue
                </p>

                <form onSubmit={handleLogin}>

                    <div className="input-group">
                        <label>Username</label>

                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Email</label>

                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>

                    <p className="forgot-password">
                        Forgot Password?
                    </p>

                </form>

            </div>
        </div>
    );
}

export default Login;