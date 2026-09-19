// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import MainLayout from "../ layouts/MainLayout.jsx";
// import { useProjects } from "../context/ProjectContext";
// import "../styles/CreateProject.css";
//
// function CreateProject() {
//
//     const navigate = useNavigate();
//
//     const { addProject } = useProjects();
//
//     const [projectIdea, setProjectIdea] =
//         useState("");
//
//     const [analyzing, setAnalyzing] =
//         useState(false);
//
//     const [analysis, setAnalysis] =
//         useState(null);
//
//
//     // ==========================================
//     // AI PROJECT ANALYSIS
//     // ==========================================
//
//     const generateProjectAnalysis = (
//         description
//     ) => {
//
//         const text =
//             description.toLowerCase();
//
//
//         let projectType =
//             "Web Application";
//
//         let name =
//             "AI-Powered Web Application";
//
//         let technologies = [
//             "React",
//             "FastAPI",
//             "Python"
//         ];
//
//         let developers = [
//             "Frontend Developer",
//             "Backend Developer",
//             "AI Developer"
//         ];
//
//         let teamSize = 3;
//
//         let duration = "3 Months";
//
//         let budget = 120000;
//
//         let risk = "Medium";
//
//         let priority = "Medium";
//
//
//         // ======================================
//         // AI / CHATBOT
//         // ======================================
//
//         if (
//             text.includes("chatbot") ||
//             text.includes("chat bot") ||
//             text.includes("conversational ai")
//         ) {
//
//             projectType =
//                 "AI Chatbot";
//
//             name =
//                 "AI Chatbot Application";
//
//             technologies = [
//                 "React",
//                 "FastAPI",
//                 "Python",
//                 "AI API",
//                 "Database"
//             ];
//
//             developers = [
//                 "Frontend Developer",
//                 "Backend Developer",
//                 "AI Developer",
//                 "UI/UX Designer"
//             ];
//
//             teamSize = 4;
//
//             duration = "4 Months";
//
//             budget = 180000;
//
//             risk = "Medium";
//
//             priority = "High";
//
//         }
//
//
//         // ======================================
//         // FRAUD DETECTION
//         // ======================================
//
//         if (
//             text.includes("fraud") ||
//             text.includes("fraud detection")
//         ) {
//
//             projectType =
//                 "AI Fraud Detection";
//
//             name =
//                 "AI Fraud Detection System";
//
//             technologies = [
//                 "React",
//                 "Python",
//                 "FastAPI",
//                 "Machine Learning",
//                 "Database"
//             ];
//
//             developers = [
//                 "Frontend Developer",
//                 "Backend Developer",
//                 "ML Engineer",
//                 "Data Scientist"
//             ];
//
//             teamSize = 4;
//
//             duration = "5 Months";
//
//             budget = 250000;
//
//             risk = "High";
//
//             priority = "High";
//
//         }
//
//
//         // ======================================
//         // E-COMMERCE
//         // ======================================
//
//         if (
//             text.includes("ecommerce") ||
//             text.includes("e-commerce") ||
//             text.includes("online shopping") ||
//             text.includes("shopping website")
//         ) {
//
//             projectType =
//                 "E-Commerce";
//
//             name =
//                 "E-Commerce Web Platform";
//
//             technologies = [
//                 "React",
//                 "Node.js",
//                 "Database",
//                 "Payment Gateway"
//             ];
//
//             developers = [
//                 "Frontend Developer",
//                 "Backend Developer",
//                 "Database Developer",
//                 "UI/UX Designer"
//             ];
//
//             teamSize = 4;
//
//             duration = "4 Months";
//
//             budget = 200000;
//
//             risk = "Medium";
//
//             priority = "High";
//
//         }
//
//
//         // ======================================
//         // MOBILE APP
//         // ======================================
//
//         if (
//             text.includes("mobile app") ||
//             text.includes("android app") ||
//             text.includes("ios app")
//         ) {
//
//             projectType =
//                 "Mobile Application";
//
//             name =
//                 "Mobile Application";
//
//             technologies = [
//                 "React Native",
//                 "FastAPI",
//                 "Python",
//                 "Database"
//             ];
//
//             developers = [
//                 "Mobile Developer",
//                 "Backend Developer",
//                 "UI/UX Designer"
//             ];
//
//             teamSize = 3;
//
//             duration = "3 Months";
//
//             budget = 150000;
//
//             risk = "Medium";
//
//             priority = "High";
//
//         }
//
//
//         // ======================================
//         // HIGH COMPLEXITY
//         // ======================================
//
//         if (
//             text.includes("real time") ||
//             text.includes("realtime") ||
//             text.includes("large scale") ||
//             text.includes("enterprise")
//         ) {
//
//             teamSize += 1;
//
//             duration =
//                 "6 Months";
//
//             budget += 100000;
//
//             risk = "High";
//
//             developers.push(
//                 "DevOps Engineer"
//             );
//
//         }
//
//
//         // ======================================
//         // DEFAULT
//         // ======================================
//
//         return {
//
//             name,
//
//             description,
//
//             projectType,
//
//             duration,
//
//             budget,
//
//             risk,
//
//             priority,
//
//             team:
//                 `${teamSize} Members`,
//
//             teamSize,
//
//             developers,
//
//             technologies,
//
//             status: "Active",
//
//             progress: 0,
//
//             spent: 0,
//
//             milestones: [
//
//                 {
//                     id: 1,
//                     name:
//                         "Requirements Analysis",
//                     completed: false
//                 },
//
//                 {
//                     id: 2,
//                     name:
//                         "UI/UX Development",
//                     completed: false
//                 },
//
//                 {
//                     id: 3,
//                     name:
//                         "Backend Development",
//                     completed: false
//                 },
//
//                 {
//                     id: 4,
//                     name:
//                         "AI Integration",
//                     completed: false
//                 },
//
//                 {
//                     id: 5,
//                     name:
//                         "Testing & Deployment",
//                     completed: false
//                 }
//
//             ]
//
//         };
//
//     };
//
//
//     // ==========================================
//     // ANALYZE
//     // ==========================================
//
//     const handleAnalyze = () => {
//
//         if (!projectIdea.trim()) {
//
//             alert(
//                 "Please enter your project idea."
//             );
//
//             return;
//
//         }
//
//
//         setAnalyzing(true);
//
//         setAnalysis(null);
//
//
//         setTimeout(() => {
//
//             const aiResult =
//                 generateProjectAnalysis(
//                     projectIdea
//                 );
//
//
//             setAnalysis(aiResult);
//
//             setAnalyzing(false);
//
//         }, 1200);
//
//     };
//
//
//     // ==========================================
//     // CREATE PROJECT
//     // ==========================================
//
//     const handleCreateProject = () => {
//
//         if (!analysis) {
//             return;
//         }
//
//
//         addProject(analysis);
//
//
//         alert(
//             "AI analyzed and created the project successfully!"
//         );
//
//
//         navigate("/projects");
//
//     };
//
//
//     return (
//
//         <MainLayout>
//
//             <div className="create-project-page">
//
//
//                 {/* HEADER */}
//
//                 <div className="create-project-header">
//
//                     <h1>
//                         🤖 Create Project with AI
//                     </h1>
//
//                     <p>
//                         Describe what you want to build
//                         and AI will recommend the project
//                         plan, team, budget and risk.
//                     </p>
//
//                 </div>
//
//
//                 {/* INPUT */}
//
//                 <div className="ai-input-section">
//
//                     <label>
//                         What do you want to build?
//                     </label>
//
//
//                     <textarea
//                         value={projectIdea}
//                         onChange={(e) =>
//                             setProjectIdea(
//                                 e.target.value
//                             )
//                         }
//                         placeholder="Example: I want to build a chatbot website for customer support..."
//                         rows={6}
//                     />
//
//
//                     <button
//                         className="analyze-button"
//                         onClick={handleAnalyze}
//                         disabled={analyzing}
//                     >
//
//                         {analyzing
//
//                             ? "🤖 AI is Analyzing..."
//
//                             : "🤖 Analyze with AI"}
//
//                     </button>
//
//                 </div>
//
//
//                 {/* AI RESULT */}
//
//                 {analysis && (
//
//                     <div className="ai-analysis">
//
//
//                         <h2>
//                             🤖 AI Recommendation
//                         </h2>
//
//
//                         <p className="analysis-message">
//
//                             AI analyzed your requirement
//                             and generated a recommended
//                             project configuration.
//
//                         </p>
//
//
//                         <div className="analysis-grid">
//
//
//                             <div className="analysis-card">
//
//                                 <span>
//                                     Project Name
//                                 </span>
//
//                                 <strong>
//                                     {analysis.name}
//                                 </strong>
//
//                             </div>
//
//
//                             <div className="analysis-card">
//
//                                 <span>
//                                     Project Type
//                                 </span>
//
//                                 <strong>
//                                     {analysis.projectType}
//                                 </strong>
//
//                             </div>
//
//
//                             <div className="analysis-card">
//
//                                 <span>
//                                     Duration
//                                 </span>
//
//                                 <strong>
//                                     {analysis.duration}
//                                 </strong>
//
//                             </div>
//
//
//                             <div className="analysis-card">
//
//                                 <span>
//                                     Estimated Budget
//                                 </span>
//
//                                 <strong>
//
//                                     ₹
//                                     {analysis.budget.toLocaleString(
//                                         "en-IN"
//                                     )}
//
//                                 </strong>
//
//                             </div>
//
//
//                             <div className="analysis-card">
//
//                                 <span>
//                                     Risk Level
//                                 </span>
//
//                                 <strong>
//                                     {analysis.risk}
//                                 </strong>
//
//                             </div>
//
//
//                             <div className="analysis-card">
//
//                                 <span>
//                                     Priority
//                                 </span>
//
//                                 <strong>
//                                     {analysis.priority}
//                                 </strong>
//
//                             </div>
//
//
//                             <div className="analysis-card">
//
//                                 <span>
//                                     Required Team
//                                 </span>
//
//                                 <strong>
//                                     {analysis.team}
//                                 </strong>
//
//                             </div>
//
//
//                             <div className="analysis-card">
//
//                                 <span>
//                                     Technologies
//                                 </span>
//
//                                 <strong>
//                                     {analysis.technologies.join(
//                                         ", "
//                                     )}
//                                 </strong>
//
//                             </div>
//
//
//                         </div>
//
//
//                         {/* DEVELOPERS */}
//
//                         <div className="analysis-description">
//
//                             <h3>
//                                 👨‍💻 Recommended Developers
//                             </h3>
//
//
//                             <p>
//                                 {analysis.developers.join(
//                                     " • "
//                                 )}
//                             </p>
//
//                         </div>
//
//
//                         {/* DESCRIPTION */}
//
//                         <div className="analysis-description">
//
//                             <h3>
//                                 Project Requirement
//                             </h3>
//
//
//                             <p>
//                                 {analysis.description}
//                             </p>
//
//                         </div>
//
//
//                         {/* ACTIONS */}
//
//                         <div className="analysis-actions">
//
//                             <button
//                                 className="back-button"
//                                 onClick={() =>
//                                     setAnalysis(null)
//                                 }
//                             >
//                                 Edit Idea
//                             </button>
//
//
//                             <button
//                                 className="approve-button"
//                                 onClick={
//                                     handleCreateProject
//                                 }
//                             >
//                                 ✓ Approve & Create Project
//                             </button>
//
//                         </div>
//
//
//                     </div>
//
//                 )}
//
//             </div>
//
//         </MainLayout>
//
//     );
//
// }
//
// export default CreateProject;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../ layouts/MainLayout.jsx";
import { useProjects } from "../context/ProjectContext";
import "../styles/CreateProject.css";

function CreateProject() {
    const navigate = useNavigate();
    const { addProject } = useProjects();

    const [projectIdea, setProjectIdea] = useState("");
    const [analyzing, setAnalyzing] = useState(false);
    const [analysis, setAnalysis] = useState(null);

    // ==========================================
    // AI PROJECT ANALYSIS
    // ==========================================

    const generateProjectAnalysis = (description) => {
        const text = description.toLowerCase();

        /*
         * Start with the user's actual requirement.
         * Recommendations are calculated from detected
         * project characteristics instead of using one
         * fixed project configuration.
         */

        let projectType = "Custom Software Project";

        let technologies = [];
        let developers = [];

        let teamSize = 1;

        let durationMin = 1;
        let durationMax = 2;

        let budgetMin = 50000;
        let budgetMax = 100000;

        let risk = "Low";
        let priority = "Medium";

        const reasons = {
            projectType: "",
            duration: "",
            budget: "",
            risk: "",
            priority: "",
            teamSize: ""
        };

        // ==========================================
        // PROJECT TYPE DETECTION
        // ==========================================

        if (
            text.includes("mobile app") ||
            text.includes("android") ||
            text.includes("ios") ||
            text.includes("mobile application")
        ) {
            projectType = "Mobile Application";
        } else if (
            text.includes("ecommerce") ||
            text.includes("e-commerce") ||
            text.includes("online shopping") ||
            text.includes("shopping platform") ||
            text.includes("online store")
        ) {
            projectType = "E-Commerce Platform";
        } else if (
            text.includes("chatbot") ||
            text.includes("chat bot") ||
            text.includes("conversational")
        ) {
            projectType = "Conversational Application";
        } else if (
            text.includes("machine learning") ||
            text.includes("ml model") ||
            text.includes("prediction") ||
            text.includes("predict") ||
            text.includes("classification") ||
            text.includes("computer vision") ||
            text.includes("natural language processing") ||
            text.includes("nlp")
        ) {
            projectType = "AI/ML Application";
        } else if (
            text.includes("data analysis") ||
            text.includes("data analytics") ||
            text.includes("dashboard") ||
            text.includes("reporting")
        ) {
            projectType = "Data Analytics Application";
        } else if (
            text.includes("coding platform") ||
            text.includes("online compiler") ||
            text.includes("code editor") ||
            text.includes("execute code")
        ) {
            projectType = "Online Coding Platform";
        } else if (
            text.includes("website") ||
            text.includes("web application") ||
            text.includes("web app") ||
            text.includes("portal") ||
            text.includes("platform")
        ) {
            projectType = "Web Application";
        }

        reasons.projectType =
            `The project type is identified from the functionality described in the requirement: "${description}".`;

        // ==========================================
        // FRONTEND TECHNOLOGY
        // ==========================================

        if (
            text.includes("react") ||
            text.includes("dynamic ui") ||
            text.includes("interactive dashboard") ||
            text.includes("single page")
        ) {
            technologies.push("React");
        } else if (
            text.includes("angular")
        ) {
            technologies.push("Angular");
        } else if (
            text.includes("vue")
        ) {
            technologies.push("Vue.js");
        } else if (
            text.includes("mobile") ||
            text.includes("android") ||
            text.includes("ios")
        ) {
            if (
                text.includes("flutter")
            ) {
                technologies.push("Flutter");
            } else if (
                text.includes("react native")
            ) {
                technologies.push("React Native");
            } else {
                technologies.push("Flutter");
            }
        } else if (
            text.includes("website") ||
            text.includes("web application") ||
            text.includes("web app") ||
            text.includes("portal") ||
            text.includes("platform")
        ) {
            technologies.push("HTML");
            technologies.push("CSS");
            technologies.push("JavaScript");
        }

        // ==========================================
        // BACKEND TECHNOLOGY
        // ==========================================

        if (text.includes("node.js") || text.includes("nodejs")) {
            technologies.push("Node.js");
        }

        if (text.includes("java") || text.includes("spring boot")) {
            technologies.push("Java");
            technologies.push("Spring Boot");
        }

        if (
            text.includes("python") ||
            text.includes("machine learning") ||
            text.includes("prediction") ||
            text.includes("computer vision") ||
            text.includes("nlp") ||
            text.includes("data analysis") ||
            text.includes("data analytics")
        ) {
            technologies.push("Python");
        }

        // ==========================================
        // AI / ML TECHNOLOGIES
        // ==========================================

        const requiresAI =
            text.includes("artificial intelligence") ||
            text.includes(" ai ") ||
            text.startsWith("ai ") ||
            text.includes("machine learning") ||
            text.includes("deep learning") ||
            text.includes("prediction") ||
            text.includes("predict") ||
            text.includes("classification") ||
            text.includes("computer vision") ||
            text.includes("nlp") ||
            text.includes("natural language");

        if (requiresAI) {
            if (!technologies.includes("Python")) {
                technologies.push("Python");
            }

            technologies.push("Machine Learning Framework");

            if (
                text.includes("api") ||
                text.includes("model serving") ||
                text.includes("backend")
            ) {
                technologies.push("API / Model Serving");
            }
        }

        // ==========================================
        // DATABASE
        // ==========================================

        const requiresDatabase =
            text.includes("database") ||
            text.includes("user data") ||
            text.includes("users") ||
            text.includes("login") ||
            text.includes("authentication") ||
            text.includes("account") ||
            text.includes("orders") ||
            text.includes("products") ||
            text.includes("records") ||
            text.includes("store data") ||
            text.includes("persistent");

        if (requiresDatabase) {
            if (
                text.includes("mongodb") ||
                text.includes("mongo")
            ) {
                technologies.push("MongoDB");
            } else if (
                text.includes("mysql")
            ) {
                technologies.push("MySQL");
            } else if (
                text.includes("postgresql") ||
                text.includes("postgres")
            ) {
                technologies.push("PostgreSQL");
            } else {
                technologies.push("Database");
            }
        }

        // ==========================================
        // AUTHENTICATION
        // ==========================================

        if (
            text.includes("login") ||
            text.includes("authentication") ||
            text.includes("signup") ||
            text.includes("sign up") ||
            text.includes("user account")
        ) {
            technologies.push("Authentication");
        }

        // ==========================================
        // PAYMENT
        // ==========================================

        if (
            text.includes("payment") ||
            text.includes("checkout") ||
            text.includes("transaction") ||
            text.includes("subscription")
        ) {
            technologies.push("Payment Gateway");
        }

        // ==========================================
        // REAL-TIME
        // ==========================================

        const realTime =
            text.includes("real time") ||
            text.includes("realtime") ||
            text.includes("live updates") ||
            text.includes("live tracking") ||
            text.includes("instant messaging") ||
            text.includes("live chat");

        if (realTime) {
            technologies.push("WebSocket / Real-Time Communication");
        }

        // ==========================================
        // CLOUD / DEPLOYMENT
        // ==========================================

        const requiresDeployment =
            text.includes("cloud") ||
            text.includes("scalable") ||
            text.includes("deployment") ||
            text.includes("production") ||
            text.includes("large scale") ||
            text.includes("enterprise");

        if (requiresDeployment) {
            technologies.push("Cloud Deployment");
        }

        // ==========================================
        // SECURITY
        // ==========================================

        const requiresSecurity =
            text.includes("secure") ||
            text.includes("security") ||
            text.includes("sensitive data") ||
            text.includes("financial") ||
            text.includes("payment") ||
            text.includes("privacy");

        if (requiresSecurity) {
            technologies.push("Security & Access Control");
        }

        // ==========================================
        // CODING PLATFORM
        // ==========================================

        if (
            text.includes("coding platform") ||
            text.includes("online compiler") ||
            text.includes("code execution") ||
            text.includes("execute code") ||
            text.includes("code editor")
        ) {
            technologies.push("Secure Code Execution / Sandboxing");
        }

        // ==========================================
        // DATA ANALYTICS
        // ==========================================

        if (
            text.includes("data analysis") ||
            text.includes("data analytics") ||
            text.includes("data visualization") ||
            text.includes("analytics dashboard")
        ) {
            if (!technologies.includes("Python")) {
                technologies.push("Python");
            }

            technologies.push("Pandas");
            technologies.push("Data Visualization");
        }

        // ==========================================
        // REMOVE DUPLICATES
        // ==========================================

        technologies = [...new Set(technologies)];

        // ==========================================
        // FALLBACK TECHNOLOGY
        // ==========================================

        if (technologies.length === 0) {
            technologies.push(
                "Technology stack to be selected after detailed requirements analysis"
            );
        }

        // ==========================================
        // DEVELOPER ROLES
        // ==========================================

        const addDeveloper = (role, count = 1) => {
            const existing = developers.find(
                (developer) => developer.role === role
            );

            if (existing) {
                existing.count += count;
            } else {
                developers.push({
                    role,
                    count
                });
            }
        };

        // Frontend
        if (
            technologies.some((tech) =>
                [
                    "React",
                    "Angular",
                    "Vue.js",
                    "HTML",
                    "CSS",
                    "JavaScript"
                ].includes(tech)
            )
        ) {
            addDeveloper("Frontend Developer");
        }

        // Mobile
        if (
            projectType === "Mobile Application"
        ) {
            addDeveloper("Mobile Developer");
        }

        // Backend
        if (
            technologies.includes("Node.js") ||
            technologies.includes("Spring Boot") ||
            requiresDatabase ||
            requiresAI ||
            realTime ||
            projectType === "E-Commerce Platform" ||
            projectType === "Online Coding Platform"
        ) {
            addDeveloper("Backend Developer");
        }

        // AI/ML
        if (requiresAI) {
            addDeveloper("AI/ML Engineer");
        }

        // Data
        if (
            text.includes("data analysis") ||
            text.includes("data analytics") ||
            text.includes("data science")
        ) {
            addDeveloper("Data Analyst");
        }

        // UI/UX
        const needsDesign =
            text.includes("design") ||
            text.includes("user experience") ||
            text.includes("ui") ||
            text.includes("ux") ||
            projectType === "E-Commerce Platform" ||
            projectType === "Mobile Application";

        if (needsDesign) {
            addDeveloper("UI/UX Designer");
        }

        // Database
        if (requiresDatabase && !requiresAI) {
            addDeveloper("Database Developer");
        }

        // DevOps
        if (requiresDeployment) {
            addDeveloper("DevOps Engineer");
        }

        // Security
        if (requiresSecurity) {
            addDeveloper("Security Engineer");
        }

        // QA
        const complexProject =
            technologies.length >= 4 ||
            realTime ||
            requiresSecurity ||
            requiresAI ||
            projectType === "E-Commerce Platform" ||
            projectType === "Online Coding Platform";

        if (complexProject) {
            addDeveloper("QA/Test Engineer");
        }

        // ==========================================
        // DEFAULT DEVELOPER
        // ==========================================

        if (developers.length === 0) {
            addDeveloper("Full Stack Developer");
        }

        // ==========================================
        // TEAM SIZE
        // ==========================================

        teamSize = developers.reduce(
            (total, developer) =>
                total + developer.count,
            0
        );

        // ==========================================
        // PROJECT COMPLEXITY
        // ==========================================

        let complexityScore = 0;

        complexityScore += technologies.length;

        if (requiresAI) complexityScore += 4;
        if (requiresDatabase) complexityScore += 2;
        if (requiresSecurity) complexityScore += 2;
        if (requiresDeployment) complexityScore += 2;
        if (realTime) complexityScore += 3;

        if (
            projectType === "E-Commerce Platform"
        ) {
            complexityScore += 3;
        }

        if (
            projectType === "Online Coding Platform"
        ) {
            complexityScore += 5;
        }

        if (
            projectType === "Mobile Application"
        ) {
            complexityScore += 2;
        }

        // ==========================================
        // DURATION
        // ==========================================

        if (complexityScore <= 4) {
            durationMin = 1;
            durationMax = 2;
        } else if (complexityScore <= 8) {
            durationMin = 2;
            durationMax = 4;
        } else if (complexityScore <= 13) {
            durationMin = 4;
            durationMax = 6;
        } else {
            durationMin = 6;
            durationMax = 10;
        }

        if (teamSize >= 5) {
            durationMax += 1;
        }

        reasons.duration =
            `The estimated ${durationMin}-${durationMax} month duration is based on the number of features, technical components, integrations, testing needs, and team specialization identified from the requirement.`;

        // ==========================================
        // BUDGET
        // ==========================================

        const monthlyCostPerDeveloper = 50000;

        budgetMin =
            teamSize *
            monthlyCostPerDeveloper *
            durationMin;

        budgetMax =
            teamSize *
            monthlyCostPerDeveloper *
            durationMax;

        // Additional technical complexity
        if (requiresAI) {
            budgetMin += 50000;
            budgetMax += 150000;
        }

        if (requiresSecurity) {
            budgetMin += 25000;
            budgetMax += 75000;
        }

        if (requiresDeployment) {
            budgetMin += 25000;
            budgetMax += 75000;
        }

        if (realTime) {
            budgetMin += 25000;
            budgetMax += 75000;
        }

        reasons.budget =
            `The budget range is calculated from the estimated team size, development duration, project complexity, specialized development, infrastructure, security, and integrations required by the project.`;

        // ==========================================
        // RISK
        // ==========================================

        if (complexityScore <= 5) {
            risk = "Low";
        } else if (complexityScore <= 9) {
            risk = "Medium";
        } else if (complexityScore <= 14) {
            risk = "High";
        } else {
            risk = "Very High";
        }

        reasons.risk =
            `Risk is ${risk} because the project has a complexity score of ${complexityScore}, considering its technical components, integrations, security, scalability, real-time functionality, and AI/ML requirements.`;

        // ==========================================
        // PRIORITY
        // ==========================================

        if (
            text.includes("critical") ||
            text.includes("mission critical") ||
            text.includes("urgent")
        ) {
            priority = "Critical";
        } else if (
            text.includes("business") ||
            text.includes("customer") ||
            text.includes("production") ||
            text.includes("enterprise") ||
            text.includes("payment") ||
            text.includes("security")
        ) {
            priority = "High";
        } else if (
            complexityScore >= 8
        ) {
            priority = "High";
        } else {
            priority = "Medium";
        }

        reasons.priority =
            `Priority is ${priority} based on the project's stated purpose, business impact, urgency indicators, and overall complexity.`;

        reasons.teamSize =
            `A ${teamSize}-member team is recommended because the project requires ${developers
                .map(
                    (developer) =>
                        `${developer.count} ${developer.role}`
                )
                .join(", ")}.`;

        // ==========================================
        // PROJECT NAME
        // ==========================================

        const words = description
            .trim()
            .split(/\s+/)
            .slice(0, 6)
            .join(" ");

        const projectName =
            words.length > 3
                ? words
                    .replace(/[^\w\s-]/g, "")
                    .replace(
                        /\b(i|want|to|build|create|a|an|the)\b/gi,
                        ""
                    )
                    .trim()
                    .split(/\s+/)
                    .map(
                        (word) =>
                            word.charAt(0).toUpperCase() +
                            word.slice(1)
                    )
                    .join(" ")
                : projectType;

        // ==========================================
        // MILESTONES
        // ==========================================

        const milestones = [
            {
                id: 1,
                name: "Requirements Analysis",
                completed: false
            },
            {
                id: 2,
                name: "UI/UX and Architecture",
                completed: false
            },
            {
                id: 3,
                name: "Core Development",
                completed: false
            }
        ];

        if (
            requiresAI
        ) {
            milestones.push({
                id: 4,
                name: "AI/ML Implementation",
                completed: false
            });
        }

        if (
            requiresDatabase ||
            requiresSecurity ||
            realTime
        ) {
            milestones.push({
                id: milestones.length + 1,
                name: "Integration & Security",
                completed: false
            });
        }

        milestones.push({
            id: milestones.length + 1,
            name: "Testing & Deployment",
            completed: false
        });

        // ==========================================
        // FINAL RESULT
        // ==========================================

        return {
            name: projectName || projectType,
            description,
            projectType,

            duration:
                `${durationMin} - ${durationMax} Months`,

            durationMin,
            durationMax,

            budget: budgetMin,
            budgetMin,
            budgetMax,

            budgetRange:
                `₹${budgetMin.toLocaleString("en-IN")} - ₹${budgetMax.toLocaleString("en-IN")}`,

            risk,
            priority,

            team:
                `${teamSize} Members`,

            teamSize,

            developers,
            technologies,

            reasons,

            status: "Active",
            progress: 0,
            spent: 0,

            milestones
        };
    };

    // ==========================================
    // ANALYZE
    // ==========================================

    const handleAnalyze = () => {
        if (!projectIdea.trim()) {
            alert("Please enter your project idea.");
            return;
        }

        setAnalyzing(true);
        setAnalysis(null);

        setTimeout(() => {
            const result =
                generateProjectAnalysis(projectIdea);

            setAnalysis(result);
            setAnalyzing(false);
        }, 1200);
    };

    // ==========================================
    // CREATE PROJECT
    // ==========================================

    const handleCreateProject = () => {
        if (!analysis) return;

        addProject(analysis);

        alert(
            "AI analyzed and created the project successfully!"
        );

        navigate("/projects");
    };

    return (
        <MainLayout>
            <div className="create-project-page">

                {/* HEADER */}

                <div className="create-project-header">
                    <h1>
                        🤖 Create Project with AI
                    </h1>

                    <p>
                        Describe what you want to build
                        and AI will recommend a project
                        plan, technologies, team,
                        budget and risk.
                    </p>
                </div>

                {/* INPUT */}

                <div className="ai-input-section">

                    <label>
                        What do you want to build?
                    </label>

                    <textarea
                        value={projectIdea}
                        onChange={(e) =>
                            setProjectIdea(e.target.value)
                        }
                        placeholder="Example: I want to build an online platform where users can create accounts, purchase products, make payments and track their orders."
                        rows={6}
                    />

                    <button
                        className="analyze-button"
                        onClick={handleAnalyze}
                        disabled={analyzing}
                    >
                        {analyzing
                            ? "🤖 AI is Analyzing..."
                            : "🤖 Analyze with AI"}
                    </button>
                </div>

                {/* AI RESULT */}

                {analysis && (
                    <div className="ai-analysis">

                        <h2>
                            🤖 AI Recommendation
                        </h2>

                        <p className="analysis-message">
                            AI analyzed your actual project
                            requirement and generated a
                            project-specific recommendation.
                        </p>

                        <div className="analysis-grid">

                            <div className="analysis-card">
                                <span>
                                    Project Name
                                </span>

                                <strong>
                                    {analysis.name}
                                </strong>
                            </div>

                            <div className="analysis-card">
                                <span>
                                    Project Type
                                </span>

                                <strong>
                                    {analysis.projectType}
                                </strong>
                            </div>

                            <div className="analysis-card">
                                <span>
                                    Duration
                                </span>

                                <strong>
                                    {analysis.duration}
                                </strong>
                            </div>

                            <div className="analysis-card">
                                <span>
                                    Estimated Budget
                                </span>

                                <strong>
                                    {analysis.budgetRange}
                                </strong>
                            </div>

                            <div className="analysis-card">
                                <span>
                                    Risk Level
                                </span>

                                <strong>
                                    {analysis.risk}
                                </strong>
                            </div>

                            <div className="analysis-card">
                                <span>
                                    Priority
                                </span>

                                <strong>
                                    {analysis.priority}
                                </strong>
                            </div>

                            <div className="analysis-card">
                                <span>
                                    Required Team
                                </span>

                                <strong>
                                    {analysis.team}
                                </strong>
                            </div>

                            <div className="analysis-card">
                                <span>
                                    Technologies
                                </span>

                                <strong>
                                    {analysis.technologies.join(
                                        ", "
                                    )}
                                </strong>
                            </div>

                        </div>

                        {/* DEVELOPERS */}

                        <div className="analysis-description">

                            <h3>
                                👨‍💻 Recommended Developers
                            </h3>

                            {analysis.developers.map(
                                (developer, index) => (
                                    <p key={index}>
                                        <strong>
                                            {developer.count} ×{" "}
                                            {developer.role}
                                        </strong>
                                    </p>
                                )
                            )}

                        </div>

                        {/* REASONS */}

                        <div className="analysis-description">

                            <h3>
                                💡 AI Recommendation Reasons
                            </h3>

                            <p>
                                <strong>
                                    Project Type:
                                </strong>{" "}
                                {analysis.reasons.projectType}
                            </p>

                            <p>
                                <strong>
                                    Duration:
                                </strong>{" "}
                                {analysis.reasons.duration}
                            </p>

                            <p>
                                <strong>
                                    Budget:
                                </strong>{" "}
                                {analysis.reasons.budget}
                            </p>

                            <p>
                                <strong>
                                    Team:
                                </strong>{" "}
                                {analysis.reasons.teamSize}
                            </p>

                            <p>
                                <strong>
                                    Risk:
                                </strong>{" "}
                                {analysis.reasons.risk}
                            </p>

                            <p>
                                <strong>
                                    Priority:
                                </strong>{" "}
                                {analysis.reasons.priority}
                            </p>

                        </div>

                        {/* DESCRIPTION */}

                        <div className="analysis-description">

                            <h3>
                                Project Requirement
                            </h3>

                            <p>
                                {analysis.description}
                            </p>

                        </div>

                        {/* ACTIONS */}

                        <div className="analysis-actions">

                            <button
                                className="back-button"
                                onClick={() =>
                                    setAnalysis(null)
                                }
                            >
                                Edit Idea
                            </button>

                            <button
                                className="approve-button"
                                onClick={
                                    handleCreateProject
                                }
                            >
                                ✓ Approve & Create Project
                            </button>

                        </div>

                    </div>
                )}

            </div>
        </MainLayout>
    );
}

export default CreateProject;