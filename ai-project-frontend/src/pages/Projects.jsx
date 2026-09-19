import { useNavigate } from "react-router-dom";
import MainLayout from "../ layouts/MainLayout.jsx";
import { useProjects } from "../context/ProjectContext";
import "../styles/Projects.css";

function Projects() {

    const navigate = useNavigate();
    const { projects } = useProjects();

    return (
        <MainLayout>

            <div className="projects-page">

                {/* Header */}

                <div className="projects-header">

                    <div>
                        <h1>📁 Projects</h1>

                        <p>
                            Manage and monitor all your projects.
                        </p>
                    </div>

                    <button
                        className="create-project-btn"
                        onClick={() => navigate("/create-project")}
                    >
                        + Create Project
                    </button>

                </div>


                {/* Project Count */}

                <div className="project-summary">

                    <div className="summary-box">
                        <span>Total Projects</span>
                        <strong>{projects.length}</strong>
                    </div>

                    <div className="summary-box">
                        <span>Active Projects</span>

                        <strong>
                            {
                                projects.filter(
                                    (project) =>
                                        project.status === "Active"
                                ).length
                            }
                        </strong>
                    </div>

                    <div className="summary-box">
                        <span>Completed</span>

                        <strong>
                            {
                                projects.filter(
                                    (project) =>
                                        Number(project.progress || 0) === 100
                                ).length
                            }
                        </strong>
                    </div>

                    <div className="summary-box">
                        <span>High Risk</span>

                        <strong>
                            {
                                projects.filter(
                                    (project) =>
                                        project.risk === "High"
                                ).length
                            }
                        </strong>
                    </div>

                </div>


                {/* Projects */}

                {projects.length === 0 ? (

                    <div className="empty-projects">

                        <div className="empty-icon">
                            📁
                        </div>

                        <h2>
                            No Projects Yet
                        </h2>

                        <p>
                            Create your first project using
                            AI-powered project analysis.
                        </p>

                        <button
                            onClick={() =>
                                navigate("/create-project")
                            }
                        >
                            Create Your First Project
                        </button>

                    </div>

                ) : (

                    <div className="projects-grid">

                        {projects.map((project) => {

                            const progress =
                                Number(project.progress || 0);

                            return (

                                <div
                                    className="project-card"
                                    key={project.id}
                                >

                                    {/* Card Header */}

                                    <div className="project-card-header">

                                        <div>

                                            <h2>
                                                {project.name}
                                            </h2>

                                            <span className="project-id">
                                                Project ID: {project.id}
                                            </span>

                                        </div>

                                        <span
                                            className={`status-badge ${
                                                project.status
                                                    ?.toLowerCase()
                                                    .replace(" ", "-")
                                            }`}
                                        >
                                            {project.status || "Active"}
                                        </span>

                                    </div>


                                    {/* Description */}

                                    <p className="project-description">

                                        {project.description ||
                                            "No project description available."}

                                    </p>


                                    {/* Project Information */}

                                    <div className="project-info">

                                        <div>
                                            <span>💰 Budget</span>

                                            <strong>
                                                ₹
                                                {Number(
                                                    project.budget || 0
                                                ).toLocaleString("en-IN")}
                                            </strong>
                                        </div>


                                        <div>
                                            <span>⚠️ Risk</span>

                                            <strong
                                                className={`risk-${(
                                                    project.risk || "Low"
                                                ).toLowerCase()}`}
                                            >
                                                {project.risk || "Low"}
                                            </strong>
                                        </div>


                                        <div>
                                            <span>⏱ Duration</span>

                                            <strong>
                                                {project.duration ||
                                                    "Not specified"}
                                            </strong>
                                        </div>


                                        <div>
                                            <span>👥 Team</span>

                                            <strong>
                                                {project.team ||
                                                    "Not specified"}
                                            </strong>
                                        </div>

                                    </div>


                                    {/* Progress */}

                                    <div className="project-progress">

                                        <div className="progress-header">

                                            <span>
                                                Project Progress
                                            </span>

                                            <strong>
                                                {progress}%
                                            </strong>

                                        </div>

                                        <div className="progress-bar">

                                            <div
                                                className="progress-fill"
                                                style={{
                                                    width: `${progress}%`
                                                }}
                                            ></div>

                                        </div>

                                    </div>


                                    {/* Footer */}

                                    <div className="project-card-footer">

                                        <button
                                            onClick={() =>
                                                navigate(
                                                    "/progress"
                                                )
                                            }
                                        >
                                            📈 Track Progress
                                        </button>

                                        <button
                                            onClick={() =>
                                                navigate(
                                                    "/risk-prediction"
                                                )
                                            }
                                        >
                                            ⚠️ Risk Analysis
                                        </button>

                                    </div>

                                </div>

                            );
                        })}

                    </div>

                )}

            </div>

        </MainLayout>
    );
}

export default Projects;