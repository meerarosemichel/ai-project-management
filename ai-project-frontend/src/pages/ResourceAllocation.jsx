import { useState } from "react";
import MainLayout from "../ layouts/MainLayout.jsx";
import { useProjects } from "../context/ProjectContext";
import "../styles/ResourceAllocation.css";

function ResourceAllocation() {

    const { projects } = useProjects();

    const [selectedProject, setSelectedProject] = useState("");
    const [analyzing, setAnalyzing] = useState(false);
    const [allocation, setAllocation] = useState(null);

    const handleAnalyze = () => {

        if (!selectedProject) {
            alert("Please select a project.");
            return;
        }

        const project = projects.find(
            (item) => String(item.id) === String(selectedProject)
        );

        if (!project) {
            alert("Project not found.");
            return;
        }

        setAnalyzing(true);
        setAllocation(null);

        // Temporary AI simulation
        setTimeout(() => {

            const resources = [
                {
                    role: "Project Manager",
                    count: 1,
                    workload: "80%",
                    reason: "Project planning and coordination"
                },
                {
                    role: "Frontend Developer",
                    count: 1,
                    workload: "90%",
                    reason: "User interface development"
                },
                {
                    role: "Backend Developer",
                    count: 1,
                    workload: "90%",
                    reason: "API and backend development"
                },
                {
                    role: "AI / ML Engineer",
                    count: 1,
                    workload: "85%",
                    reason: "AI model development and integration"
                },
                {
                    role: "UI/UX Designer",
                    count: 1,
                    workload: "50%",
                    reason: "Interface and user experience design"
                },
                {
                    role: "Tester",
                    count: 1,
                    workload: "60%",
                    reason: "Testing and quality assurance"
                }
            ];

            setAllocation({
                projectName: project.name,
                resources
            });

            setAnalyzing(false);

        }, 1500);
    };

    return (
        <MainLayout>

            <div className="resource-page">

                <div className="resource-header">

                    <h1>👥 Resource Allocation</h1>

                    <p>
                        Let AI analyze your project and recommend
                        the resources required.
                    </p>

                </div>


                {/* Project Selection */}

                <div className="resource-input-card">

                    <label>
                        Select Project
                    </label>

                    {projects.length === 0 ? (

                        <p className="no-projects">
                            No projects available. Please create a
                            project first.
                        </p>

                    ) : (

                        <>

                            <select
                                value={selectedProject}
                                onChange={(e) =>
                                    setSelectedProject(e.target.value)
                                }
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


                            <button
                                className="allocate-button"
                                onClick={handleAnalyze}
                                disabled={analyzing}
                            >

                                {analyzing
                                    ? "🤖 AI Analyzing..."
                                    : "🤖 Generate Allocation"}

                            </button>

                        </>

                    )}

                </div>


                {/* Allocation Result */}

                {allocation && (

                    <div className="allocation-result">

                        <h2>
                            🤖 AI Resource Recommendation
                        </h2>

                        <p className="project-name">
                            Project: <strong>
                            {allocation.projectName}
                        </strong>
                        </p>


                        <div className="resource-grid">

                            {allocation.resources.map(
                                (resource, index) => (

                                    <div
                                        className="resource-card"
                                        key={index}
                                    >

                                        <div className="resource-card-header">

                                            <h3>
                                                {resource.role}
                                            </h3>

                                            <span>
                                                {resource.count}
                                            </span>

                                        </div>


                                        <p>
                                            {resource.reason}
                                        </p>


                                        <div className="workload-header">

                                            <span>
                                                Workload
                                            </span>

                                            <strong>
                                                {resource.workload}
                                            </strong>

                                        </div>


                                        <div className="workload-bar">

                                            <div
                                                className="workload-fill"
                                                style={{
                                                    width: resource.workload
                                                }}
                                            ></div>

                                        </div>

                                    </div>

                                )
                            )}

                        </div>


                        <div className="allocation-summary">

                            <h3>
                                📊 Allocation Summary
                            </h3>

                            <p>
                                AI recommends{" "}
                                <strong>
                                    {allocation.resources.reduce(
                                        (total, resource) =>
                                            total + resource.count,
                                        0
                                    )}
                                </strong>{" "}
                                resources for this project.
                            </p>

                        </div>

                    </div>

                )}

            </div>

        </MainLayout>
    );
}

export default ResourceAllocation;