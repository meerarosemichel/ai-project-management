import { useState } from "react";
import MainLayout from "../ layouts/MainLayout.jsx";
import { useProjects } from "../context/ProjectContext";
import "../styles/RiskPrediction.css";

function RiskPrediction() {

    const { projects } = useProjects();

    const [selectedProject, setSelectedProject] = useState("");
    const [prediction, setPrediction] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);

    const handlePredict = () => {

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
        setPrediction(null);

        // Temporary AI simulation
        setTimeout(() => {

            let risk = "Low";
            let factors = [];
            let recommendations = [];

            const progress = Number(project.progress || 0);
            const budget = Number(project.budget || 0);

            // Risk calculation
            if (project.risk === "High") {
                risk = "High";
            } else if (project.risk === "Medium") {
                risk = "Medium";
            }

            if (progress < 30) {
                factors.push("Project progress is relatively low.");
            }

            if (budget > 100000) {
                factors.push("Project has a high estimated budget.");
            }

            if (project.endDate) {

                const today = new Date();
                const endDate = new Date(project.endDate);

                if (endDate < today && progress < 100) {
                    risk = "High";
                    factors.push(
                        "Project deadline has passed but the project is not completed."
                    );
                }
            }

            if (factors.length === 0) {
                factors.push(
                    "No major risk factors detected from the available project data."
                );
            }

            if (risk === "High") {

                recommendations = [
                    "Review the project timeline.",
                    "Monitor budget usage closely.",
                    "Allocate additional resources if required.",
                    "Review project blockers immediately."
                ];

            } else if (risk === "Medium") {

                recommendations = [
                    "Monitor project progress regularly.",
                    "Review upcoming deadlines.",
                    "Track budget utilization.",
                    "Identify possible project blockers."
                ];

            } else {

                recommendations = [
                    "Continue monitoring project progress.",
                    "Maintain the current project schedule.",
                    "Review risks periodically."
                ];
            }

            setPrediction({
                projectName: project.name,
                risk,
                factors,
                recommendations
            });

            setAnalyzing(false);

        }, 1500);
    };

    return (
        <MainLayout>

            <div className="risk-page">

                <div className="risk-header">

                    <h1>⚠️ Risk Prediction</h1>

                    <p>
                        Analyze your project and identify potential
                        risks using AI.
                    </p>

                </div>


                {/* Project Selection */}

                <div className="risk-input-card">

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
                                className="predict-button"
                                onClick={handlePredict}
                                disabled={analyzing}
                            >

                                {analyzing
                                    ? "🤖 AI Analyzing..."
                                    : "🤖 Predict Risk"}

                            </button>

                        </>

                    )}

                </div>


                {/* Prediction Result */}

                {prediction && (

                    <div className="prediction-card">

                        <h2>
                            🤖 AI Risk Analysis
                        </h2>

                        <h3>
                            {prediction.projectName}
                        </h3>


                        {/* Risk Level */}

                        <div className={`risk-result ${prediction.risk.toLowerCase()}`}>

                            <span>
                                Risk Level
                            </span>

                            <strong>
                                {prediction.risk === "High" && "🔴 "}
                                {prediction.risk === "Medium" && "🟡 "}
                                {prediction.risk === "Low" && "🟢 "}

                                {prediction.risk}
                            </strong>

                        </div>


                        {/* Risk Factors */}

                        <div className="risk-block">

                            <h3>
                                🔍 Risk Factors
                            </h3>

                            <ul>

                                {prediction.factors.map(
                                    (factor, index) => (
                                        <li key={index}>
                                            {factor}
                                        </li>
                                    )
                                )}

                            </ul>

                        </div>


                        {/* Recommendations */}

                        <div className="risk-block">

                            <h3>
                                💡 AI Recommendations
                            </h3>

                            <ul>

                                {prediction.recommendations.map(
                                    (recommendation, index) => (
                                        <li key={index}>
                                            {recommendation}
                                        </li>
                                    )
                                )}

                            </ul>

                        </div>

                    </div>

                )}

            </div>

        </MainLayout>
    );
}

export default RiskPrediction;