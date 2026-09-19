import { useState } from "react";
import MainLayout from "../ layouts/MainLayout.jsx";
import { useProjects } from "../context/ProjectContext";
import "../styles/AIPlanner.css";

function AIPlanner() {
    const { projects } = useProjects();

    const [selectedProject, setSelectedProject] = useState("");
    const [planning, setPlanning] = useState(false);
    const [plan, setPlan] = useState(null);

    const handleGeneratePlan = () => {
        if (!selectedProject) {
            alert("Please select a project.");
            return;
        }

        setPlanning(true);
        setPlan(null);

        // Temporary AI simulation
        // Later this will be replaced with FastAPI + AI
        setTimeout(() => {
            const selected = projects.find(
                (project) => String(project.id) === String(selectedProject)
            );

            const projectName = selected
                ? selected.name
                : "Selected Project";

            const aiPlan = {
                projectName,

                summary:
                    "AI has analyzed the project and created an execution plan with phases, tasks, timeline and resource requirements.",

                phases: [
                    {
                        phase: "Phase 1",
                        title: "Requirement Analysis",
                        duration: "2 Weeks",
                        status: "Not Started",
                        tasks: [
                            "Identify project requirements",
                            "Analyze user needs",
                            "Define system features",
                            "Prepare project documentation"
                        ]
                    },
                    {
                        phase: "Phase 2",
                        title: "System Design",
                        duration: "3 Weeks",
                        status: "Not Started",
                        tasks: [
                            "Design system architecture",
                            "Design database structure",
                            "Create UI/UX design",
                            "Define API structure"
                        ]
                    },
                    {
                        phase: "Phase 3",
                        title: "Development",
                        duration: "8 Weeks",
                        status: "Not Started",
                        tasks: [
                            "Develop frontend",
                            "Develop backend",
                            "Integrate database",
                            "Implement core features"
                        ]
                    },
                    {
                        phase: "Phase 4",
                        title: "Testing & Deployment",
                        duration: "3 Weeks",
                        status: "Not Started",
                        tasks: [
                            "Perform functional testing",
                            "Fix identified issues",
                            "Perform final validation",
                            "Deploy the application"
                        ]
                    }
                ],

                resources: [
                    "Frontend Developer",
                    "Backend Developer",
                    "AI/ML Developer",
                    "UI/UX Designer"
                ]
            };

            setPlan(aiPlan);
            setPlanning(false);
        }, 1500);
    };

    return (
        <MainLayout>
            <div className="ai-planner-page">

                {/* Header */}
                <div className="ai-planner-header">
                    <h1>🤖 AI Project Planner</h1>

                    <p>
                        Select a project and let AI generate
                        a complete execution plan.
                    </p>
                </div>

                {/* Project Selection */}
                <div className="planner-input-card">

                    <label>
                        Select Project
                    </label>

                    <select
                        value={selectedProject}
                        onChange={(e) => {
                            setSelectedProject(e.target.value);
                            setPlan(null);
                        }}
                    >
                        <option value="">
                            -- Select a Project --
                        </option>

                        {projects && projects.length > 0 ? (
                            projects.map((project, index) => (
                                <option
                                    key={project.id || index}
                                    value={project.id || index}
                                >
                                    {project.name}
                                </option>
                            ))
                        ) : (
                            <option disabled>
                                No projects available
                            </option>
                        )}
                    </select>

                    <button
                        className="generate-plan-button"
                        onClick={handleGeneratePlan}
                        disabled={planning}
                    >
                        {planning
                            ? "🤖 AI is Creating Plan..."
                            : "🤖 Generate AI Plan"}
                    </button>

                </div>

                {/* AI Plan */}
                {plan && (
                    <div className="ai-plan-result">

                        <div className="plan-title">
                            <h2>
                                🤖 AI Generated Project Plan
                            </h2>

                            <h3>
                                {plan.projectName}
                            </h3>

                            <p>
                                {plan.summary}
                            </p>
                        </div>

                        {/* Phases */}
                        <div className="plan-section">

                            <h2>📋 Project Phases</h2>

                            <div className="phases-container">

                                {plan.phases.map((phase, index) => (
                                    <div
                                        className="phase-card"
                                        key={index}
                                    >

                                        <div className="phase-header">

                                            <div>
                                                <span className="phase-number">
                                                    {phase.phase}
                                                </span>

                                                <h3>
                                                    {phase.title}
                                                </h3>
                                            </div>

                                            <span className="phase-duration">
                                                {phase.duration}
                                            </span>

                                        </div>

                                        <div className="phase-status">
                                            {phase.status}
                                        </div>

                                        <h4>
                                            Tasks
                                        </h4>

                                        <ul>
                                            {phase.tasks.map(
                                                (task, taskIndex) => (
                                                    <li key={taskIndex}>
                                                        {task}
                                                    </li>
                                                )
                                            )}
                                        </ul>

                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* Resources */}
                        <div className="resources-section">

                            <h2>👥 Recommended Resources</h2>

                            <div className="resources-grid">

                                {plan.resources.map(
                                    (resource, index) => (
                                        <div
                                            className="resource-card"
                                            key={index}
                                        >
                                            👤 {resource}
                                        </div>
                                    )
                                )}

                            </div>

                        </div>

                    </div>
                )}

            </div>
        </MainLayout>
    );
}

export default AIPlanner;