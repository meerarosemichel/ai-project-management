import { useState } from "react";
import MainLayout from "../ layouts/MainLayout.jsx";
import { useUser } from "../context/UserContext";
import "../styles/Settings.css";

function Settings() {

    const { user } = useUser();

    const [notifications, setNotifications] = useState(true);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const [saved, setSaved] = useState(false);

    const username =
        user?.username ||
        user?.name ||
        "User";

    const handleSaveSettings = () => {

        localStorage.setItem(
            "notifications",
            notifications
        );

        localStorage.setItem(
            "emailNotifications",
            emailNotifications
        );

        localStorage.setItem(
            "darkMode",
            darkMode
        );

        setSaved(true);

        setTimeout(() => {
            setSaved(false);
        }, 2000);
    };


    const handleResetSettings = () => {

        setNotifications(true);
        setEmailNotifications(true);
        setDarkMode(false);

        localStorage.removeItem("notifications");
        localStorage.removeItem("emailNotifications");
        localStorage.removeItem("darkMode");

        setSaved(false);
    };


    return (

        <MainLayout>

            <div className="settings-page">


                {/* =========================
                    HEADER
                ========================= */}

                <div className="settings-header">

                    <h1>
                        ⚙️ Settings
                    </h1>

                    <p>
                        Manage your account and application preferences.
                    </p>

                </div>


                {/* =========================
                    PROFILE
                ========================= */}

                <div className="settings-section">

                    <h2>
                        👤 Profile
                    </h2>

                    <div className="profile-card">

                        <div className="profile-avatar">
                            {username.charAt(0).toUpperCase()}
                        </div>

                        <div className="profile-info">

                            <h3>
                                {username}
                            </h3>

                            <p>
                                Project Manager
                            </p>

                        </div>

                    </div>

                </div>


                {/* =========================
                    NOTIFICATIONS
                ========================= */}

                <div className="settings-section">

                    <h2>
                        🔔 Notifications
                    </h2>


                    <div className="setting-item">

                        <div>

                            <h3>
                                Push Notifications
                            </h3>

                            <p>
                                Receive notifications about project
                                updates and risks.
                            </p>

                        </div>


                        <label className="switch">

                            <input
                                type="checkbox"
                                checked={notifications}
                                onChange={(e) =>
                                    setNotifications(
                                        e.target.checked
                                    )
                                }
                            />

                            <span className="slider"></span>

                        </label>

                    </div>


                    <div className="setting-item">

                        <div>

                            <h3>
                                Email Notifications
                            </h3>

                            <p>
                                Receive important project reports
                                through email.
                            </p>

                        </div>


                        <label className="switch">

                            <input
                                type="checkbox"
                                checked={emailNotifications}
                                onChange={(e) =>
                                    setEmailNotifications(
                                        e.target.checked
                                    )
                                }
                            />

                            <span className="slider"></span>

                        </label>

                    </div>

                </div>


                {/* =========================
                    APPEARANCE
                ========================= */}

                <div className="settings-section">

                    <h2>
                        🎨 Appearance
                    </h2>


                    <div className="setting-item">

                        <div>

                            <h3>
                                Dark Mode
                            </h3>

                            <p>
                                Change the appearance of the
                                application.
                            </p>

                        </div>


                        <label className="switch">

                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={(e) =>
                                    setDarkMode(
                                        e.target.checked
                                    )
                                }
                            />

                            <span className="slider"></span>

                        </label>

                    </div>

                </div>


                {/* =========================
                    AI SETTINGS
                ========================= */}

                <div className="settings-section">

                    <h2>
                        🤖 AI Preferences
                    </h2>


                    <div className="ai-preference">

                        <div>

                            <h3>
                                AI Project Analysis
                            </h3>

                            <p>
                                AI automatically analyzes project
                                risks, progress and budget.
                            </p>

                        </div>

                        <span className="enabled-badge">
                            Enabled
                        </span>

                    </div>


                    <div className="ai-preference">

                        <div>

                            <h3>
                                Automatic Risk Detection
                            </h3>

                            <p>
                                Monitor projects for potential
                                delays and risks.
                            </p>

                        </div>

                        <span className="enabled-badge">
                            Enabled
                        </span>

                    </div>

                </div>


                {/* =========================
                    ACTION BUTTONS
                ========================= */}

                <div className="settings-actions">

                    <button
                        className="reset-button"
                        onClick={handleResetSettings}
                    >
                        Reset
                    </button>


                    <button
                        className="save-button"
                        onClick={handleSaveSettings}
                    >
                        {saved
                            ? "✓ Saved"
                            : "Save Settings"}
                    </button>

                </div>


                {/* =========================
                    APPLICATION INFO
                ========================= */}

                <div className="application-info">

                    <h3>
                        AI Project Management
                    </h3>

                    <p>
                        AI-powered project planning,
                        risk prediction, resource allocation,
                        progress tracking and budget management.
                    </p>

                    <span>
                        Version 1.0.0
                    </span>

                </div>

            </div>

        </MainLayout>

    );
}

export default Settings;