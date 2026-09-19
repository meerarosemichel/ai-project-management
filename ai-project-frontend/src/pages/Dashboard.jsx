import { useLocation } from "react-router-dom";
import MainLayout from "../ layouts/MainLayout.jsx";
import DashboardCard from "../components/DashboardCard";
import "../styles/Dashboard.css";
import { useUser } from "../context/UserContext";
import { useProjects } from "../context/ProjectContext";

function Dashboard() {

    const { user } = useUser();
    const { projects } = useProjects();
    const location = useLocation();

    // Username
    const username =
        user?.username ||
        location.state?.username ||
        "Guest";

    // Project calculations
    const activeProjects = projects.filter(
        (project) => project.status === "Active"
    );

    const highRiskProjects = projects.filter(
        (project) => project.risk === "High"
    );

    const mediumRiskProjects = projects.filter(
        (project) => project.risk === "Medium"
    );

    const lowRiskProjects = projects.filter(
        (project) => project.risk === "Low"
    );

    // Total budget
    const totalBudget = projects.reduce(
        (total, project) =>
            total + Number(project.budget || 0),
        0
    );

    return (
        <MainLayout>

            <div className="dashboard-page">

                {/* ================= HEADER ================= */}

                <div className="dashboard-header">

                    <div>
                        <h1 className="dashboard-title">
                            Dashboard
                        </h1>

                        <p className="dashboard-description">
                            AI-powered project management overview
                        </p>
                    </div>

                    <div className="welcome-user">
                        👋 Welcome, <strong>{username}</strong>
                    </div>

                </div>


                {/* ================= SUMMARY CARDS ================= */}

                <div className="dashboard-cards">

                    <DashboardCard
                        title="Total Projects"
                        value={projects.length}
                    />

                    <DashboardCard
                        title="Active Projects"
                        value={activeProjects.length}
                    />

                    <DashboardCard
                        title="High Risks"
                        value={highRiskProjects.length}
                    />

                    <DashboardCard
                        title="Budget Used"
                        value={`₹${totalBudget.toLocaleString("en-IN")}`}
                    />

                </div>


                {/* ================= PROJECT PROGRESS ================= */}

                <div className="dashboard-row">

                    <div className="dashboard-section">

                        <h2>📈 Project Progress</h2>

                        {projects.length === 0 ? (

                            <p className="empty-message">
                                No projects created yet.
                            </p>

                        ) : (

                            projects.map((project) => (

                                <div
                                    className="progress-project"
                                    key={project.id}
                                >

                                    <div className="progress-header">

                                        <span>
                                            {project.name}
                                        </span>

                                        <span>
                                            {project.progress || 0}%
                                        </span>

                                    </div>

                                    <div className="progress-bar">

                                        <div
                                            className="progress-fill"
                                            style={{
                                                width: `${project.progress || 0}%`
                                            }}
                                        ></div>

                                    </div>

                                </div>

                            ))

                        )}

                    </div>


                    {/* ================= RISK OVERVIEW ================= */}

                    <div className="dashboard-section">

                        <h2>⚠️ Risk Overview</h2>

                        <div className="risk-item high">

                            <span>
                                🔴 High
                            </span>

                            <strong>
                                {highRiskProjects.length}
                            </strong>

                        </div>


                        <div className="risk-item medium">

                            <span>
                                🟡 Medium
                            </span>

                            <strong>
                                {mediumRiskProjects.length}
                            </strong>

                        </div>


                        <div className="risk-item low">

                            <span>
                                🟢 Low
                            </span>

                            <strong>
                                {lowRiskProjects.length}
                            </strong>

                        </div>

                    </div>

                </div>


                {/* ================= DEADLINES + AI ================= */}

                <div className="dashboard-row">

                    {/* Upcoming Deadlines */}

                    <div className="dashboard-section">

                        <h2>📅 Upcoming Deadlines</h2>

                        {projects.length === 0 ? (

                            <p className="empty-message">
                                No upcoming deadlines.
                            </p>

                        ) : (

                            projects
                                .filter((project) => project.endDate)
                                .slice(0, 5)
                                .map((project) => (

                                    <div
                                        className="deadline-item"
                                        key={project.id}
                                    >

                                        <span>
                                            {project.name}
                                        </span>

                                        <span>
                                            {project.endDate}
                                        </span>

                                    </div>

                                ))

                        )}

                    </div>


                    {/* AI Insights */}

                    <div className="dashboard-section ai-section">

                        <h2>🤖 AI Insights</h2>

                        {projects.length === 0 ? (

                            <p>
                                💡 Create your first project to
                                receive AI insights.
                            </p>

                        ) : (

                            <>
                                {highRiskProjects.length > 0 && (

                                    <p>
                                        ⚠️{" "}
                                        {highRiskProjects.length}{" "}
                                        project(s) require attention.
                                    </p>

                                )}

                                {activeProjects.length > 0 && (

                                    <p>
                                        📊{" "}
                                        {activeProjects.length}{" "}
                                        active project(s) are currently
                                        being monitored.
                                    </p>

                                )}

                                <p>
                                    💡 AI is monitoring your projects
                                    for potential risks and delays.
                                </p>
                            </>

                        )}

                    </div>

                </div>


                {/* ================= RECENT ACTIVITY ================= */}

                <div className="dashboard-section">

                    <h2>🕒 Recent Activity</h2>

                    {projects.length === 0 ? (

                        <p className="empty-message">
                            No recent activity.
                        </p>

                    ) : (

                        projects
                            .slice(-5)
                            .reverse()
                            .map((project) => (

                                <div
                                    className="activity-item"
                                    key={project.id}
                                >

                                    ✓ Created project:{" "}

                                    <strong>
                                        {project.name}
                                    </strong>

                                </div>

                            ))

                    )}

                </div>

            </div>

        </MainLayout>
    );
}

export default Dashboard;