import { useState } from "react";
import MainLayout from "../ layouts/MainLayout.jsx";
import { useProjects } from "../context/ProjectContext";
import "../styles/Progress.css";

function Progress() {

    const { projects, updateProject } = useProjects();

    const [selectedProject, setSelectedProject] = useState("");
    const [progress, setProgress] = useState(0);

    const selectedProjectData = projects.find(
        (project) =>
            String(project.id) === String(selectedProject)
    );

    const handleProjectChange = (e) => {

        const projectId = e.target.value;

        setSelectedProject(projectId);

        const project = projects.find(
            (item) =>
                String(item.id) === String(projectId)
        );

        if (project) {
            setProgress(Number(project.progress || 0));
        }
    };

    const handleUpdateProgress = () => {

        if (!selectedProject) {
            alert("Please select a project.");
            return;
        }

        updateProject(
            Number(selectedProject),
            {
                progress: Number(progress)
            }
        );

        alert("Project progress updated successfully!");
    };

    return (
        <MainLayout>

            <div className="progress-page">

                {/* Header */}

                <div className="progress-header">

                    <h1>📈 Progress Tracking</h1>

                    <p>
                        Monitor and update the progress of your projects.
                    </p>

                </div>


                {/* No Projects */}

                {projects.length === 0 ? (

                    <div className="no-progress-projects">

                        <h2>No Projects Available</h2>

                        <p>
                            Create a project first to track its progress.
                        </p>

                    </div>

                ) : (

                    <>

                        {/* Project Selection */}

                        <div className="progress-input-card">

                            <label>
                                Select Project
                            </label>

                            <select
                                value={selectedProject}
                                onChange={handleProjectChange}
                            >

                                <option value="">
                                    -- Select a Project --
                                </option>

                                {projects.map((project) => (

                                    <option
                                        key={project.id}
                                        value={project.id}
                                    >
                                        {project.name}
                                    </option>

                                ))}

                            </select>

                        </div>


                        {/* Project Details */}

                        {selectedProjectData && (

                            <div className="progress-card">

                                <div className="project-progress-header">

                                    <div>

                                        <h2>
                                            {selectedProjectData.name}
                                        </h2>

                                        <p>
                                            {selectedProjectData.description}
                                        </p>

                                    </div>

                                    <strong>
                                        {progress}%
                                    </strong>

                                </div>


                                {/* Progress Bar */}

                                <div className="large-progress-bar">

                                    <div
                                        className="large-progress-fill"
                                        style={{
                                            width: `${progress}%`
                                        }}
                                    ></div>

                                </div>


                                {/* Progress Input */}

                                <div className="progress-control">

                                    <label>
                                        Project Progress: {progress}%
                                    </label>

                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={progress}
                                        onChange={(e) =>
                                            setProgress(e.target.value)
                                        }
                                    />

                                    <div className="range-values">
                                        <span>0%</span>
                                        <span>50%</span>
                                        <span>100%</span>
                                    </div>

                                </div>


                                {/* Status */}

                                <div className="progress-status">

                                    <span>
                                        Status
                                    </span>

                                    <strong>

                                        {progress >= 100
                                            ? "✅ Completed"
                                            : progress >= 50
                                                ? "🟢 In Progress"
                                                : "🟡 Started"}

                                    </strong>

                                </div>


                                {/* Update */}

                                <button
                                    className="update-progress-button"
                                    onClick={handleUpdateProgress}
                                >
                                    Update Progress
                                </button>

                            </div>

                        )}


                        {/* All Projects */}

                        <div className="all-progress-section">

                            <h2>
                                📊 All Project Progress
                            </h2>

                            <div className="all-progress-list">

                                {projects.map((project) => (

                                    <div
                                        className="project-progress-item"
                                        key={project.id}
                                    >

                                        <div className="item-header">

                                            <span>
                                                {project.name}
                                            </span>

                                            <strong>
                                                {project.progress || 0}%
                                            </strong>

                                        </div>

                                        <div className="small-progress-bar">

                                            <div
                                                className="small-progress-fill"
                                                style={{
                                                    width: `${project.progress || 0}%`
                                                }}
                                            ></div>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </>

                )}

            </div>

        </MainLayout>
    );
}

export default Progress;