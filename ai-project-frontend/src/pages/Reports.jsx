import MainLayout from "../ layouts/MainLayout.jsx";
import { useProjects } from "../context/ProjectContext";
import "../styles/Reports.css";

function Reports() {

    const { projects } = useProjects();

    // =========================
    // CALCULATIONS
    // =========================

    const totalProjects = projects.length;

    const activeProjects = projects.filter(
        (project) => project.status === "Active"
    );

    const completedProjects = projects.filter(
        (project) =>
            project.status === "Completed" ||
            Number(project.progress || 0) >= 100
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

    const totalBudget = projects.reduce(
        (total, project) =>
            total + Number(project.budget || 0),
        0
    );

    const totalSpent = projects.reduce(
        (total, project) =>
            total + Number(project.spent || 0),
        0
    );

    const remainingBudget =
        totalBudget - totalSpent;

    const budgetUsed =
        totalBudget > 0
            ? Math.round(
                (totalSpent / totalBudget) * 100
            )
            : 0;

    const averageProgress =
        totalProjects > 0
            ? Math.round(
                projects.reduce(
                    (total, project) =>
                        total +
                        Number(project.progress || 0),
                    0
                ) / totalProjects
            )
            : 0;


    // =========================
    // CURRENCY
    // =========================

    const formatCurrency = (amount) => {

        return `₹${Number(amount).toLocaleString("en-IN")}`;

    };


    // =========================
    // REPORT DATE
    // =========================

    const reportDate =
        new Date().toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });


    // =========================
    // PRINT REPORT
    // =========================

    const handlePrint = () => {

        window.print();

    };


    return (

        <MainLayout>

            <div className="reports-page">


                {/* =========================
                    HEADER
                ========================= */}

                <div className="reports-header">

                    <div>

                        <h1>
                            📄 Project Reports
                        </h1>

                        <p>
                            AI-powered project management
                            summary and performance report.
                        </p>

                    </div>


                    <button
                        className="print-report-button"
                        onClick={handlePrint}
                    >
                        🖨️ Print Report
                    </button>

                </div>


                {/* =========================
                    REPORT INFO
                ========================= */}

                <div className="report-info">

                    <div>

                        <span>
                            Report Date
                        </span>

                        <strong>
                            {reportDate}
                        </strong>

                    </div>


                    <div>

                        <span>
                            Total Projects
                        </span>

                        <strong>
                            {totalProjects}
                        </strong>

                    </div>


                    <div>

                        <span>
                            Average Progress
                        </span>

                        <strong>
                            {averageProgress}%
                        </strong>

                    </div>

                </div>


                {projects.length === 0 ? (

                    /* =========================
                       NO PROJECTS
                    ========================= */

                    <div className="reports-empty">

                        <div className="reports-empty-icon">
                            📊
                        </div>

                        <h2>
                            No Project Data Available
                        </h2>

                        <p>
                            Create a project first to
                            generate a project report.
                        </p>

                    </div>

                ) : (

                    <>


                        {/* =========================
                            PROJECT SUMMARY
                        ========================= */}

                        <div className="report-section">

                            <h2>
                                📊 Project Summary
                            </h2>


                            <div className="report-summary-grid">


                                <div className="report-summary-card">

                                    <span>
                                        Total Projects
                                    </span>

                                    <strong>
                                        {totalProjects}
                                    </strong>

                                </div>


                                <div className="report-summary-card">

                                    <span>
                                        Active Projects
                                    </span>

                                    <strong>
                                        {activeProjects.length}
                                    </strong>

                                </div>


                                <div className="report-summary-card">

                                    <span>
                                        Completed
                                    </span>

                                    <strong>
                                        {completedProjects.length}
                                    </strong>

                                </div>


                                <div className="report-summary-card">

                                    <span>
                                        Average Progress
                                    </span>

                                    <strong>
                                        {averageProgress}%
                                    </strong>

                                </div>

                            </div>

                        </div>


                        {/* =========================
                            RISK REPORT
                        ========================= */}

                        <div className="report-section">

                            <h2>
                                ⚠️ Risk Analysis
                            </h2>


                            <div className="risk-report-grid">


                                <div className="risk-report-item high">

                                    <span>
                                        🔴 High Risk
                                    </span>

                                    <strong>
                                        {highRiskProjects.length}
                                    </strong>

                                </div>


                                <div className="risk-report-item medium">

                                    <span>
                                        🟡 Medium Risk
                                    </span>

                                    <strong>
                                        {mediumRiskProjects.length}
                                    </strong>

                                </div>


                                <div className="risk-report-item low">

                                    <span>
                                        🟢 Low Risk
                                    </span>

                                    <strong>
                                        {lowRiskProjects.length}
                                    </strong>

                                </div>

                            </div>


                            {highRiskProjects.length > 0 && (

                                <div className="report-alert">

                                    ⚠️ Attention required:
                                    {" "}
                                    {highRiskProjects.length}
                                    {" "}
                                    project(s) currently
                                    have high risk.

                                </div>

                            )}

                        </div>


                        {/* =========================
                            BUDGET REPORT
                        ========================= */}

                        <div className="report-section">

                            <h2>
                                💰 Budget Analysis
                            </h2>


                            <div className="budget-report-grid">


                                <div>

                                    <span>
                                        Total Budget
                                    </span>

                                    <strong>
                                        {formatCurrency(
                                            totalBudget
                                        )}
                                    </strong>

                                </div>


                                <div>

                                    <span>
                                        Total Spent
                                    </span>

                                    <strong className="spent">
                                        {formatCurrency(
                                            totalSpent
                                        )}
                                    </strong>

                                </div>


                                <div>

                                    <span>
                                        Remaining
                                    </span>

                                    <strong className="remaining">
                                        {formatCurrency(
                                            remainingBudget
                                        )}
                                    </strong>

                                </div>


                                <div>

                                    <span>
                                        Budget Used
                                    </span>

                                    <strong>
                                        {budgetUsed}%
                                    </strong>

                                </div>

                            </div>


                            <div className="report-progress-bar">

                                <div
                                    className={
                                        budgetUsed >= 90
                                            ? "danger"
                                            : budgetUsed >= 70
                                                ? "warning"
                                                : ""
                                    }
                                    style={{
                                        width:
                                            `${budgetUsed}%`
                                    }}
                                />

                            </div>

                        </div>


                        {/* =========================
                            PROJECT DETAILS
                        ========================= */}

                        <div className="report-section">

                            <h2>
                                📁 Project Details
                            </h2>


                            <div className="report-table-wrapper">

                                <table className="report-table">

                                    <thead>

                                    <tr>

                                        <th>
                                            Project
                                        </th>

                                        <th>
                                            Status
                                        </th>

                                        <th>
                                            Progress
                                        </th>

                                        <th>
                                            Risk
                                        </th>

                                        <th>
                                            Budget
                                        </th>

                                        <th>
                                            Spent
                                        </th>

                                    </tr>

                                    </thead>


                                    <tbody>

                                    {projects.map(
                                        (project) => (

                                            <tr
                                                key={
                                                    project.id
                                                }
                                            >

                                                <td>
                                                    <strong>
                                                        {
                                                            project.name
                                                        }
                                                    </strong>
                                                </td>


                                                <td>

                                                        <span
                                                            className={`status-label ${
                                                                String(
                                                                    project.status ||
                                                                    ""
                                                                )
                                                                    .toLowerCase()
                                                                    .replace(
                                                                        " ",
                                                                        "-"
                                                                    )
                                                            }`}
                                                        >
                                                            {
                                                                project.status ||
                                                                "Active"
                                                            }
                                                        </span>

                                                </td>


                                                <td>

                                                    <div className="table-progress">

                                                        <div>

                                                            <div
                                                                className="table-progress-fill"
                                                                style={{
                                                                    width:
                                                                        `${project.progress || 0}%`
                                                                }}
                                                            />

                                                        </div>

                                                        <span>
                                                                {
                                                                    project.progress ||
                                                                    0
                                                                }%
                                                            </span>

                                                    </div>

                                                </td>


                                                <td>

                                                        <span
                                                            className={`risk-label ${
                                                                String(
                                                                    project.risk ||
                                                                    "Low"
                                                                ).toLowerCase()
                                                            }`}
                                                        >
                                                            {
                                                                project.risk ||
                                                                "Low"
                                                            }
                                                        </span>

                                                </td>


                                                <td>
                                                    {formatCurrency(
                                                        project.budget ||
                                                        0
                                                    )}
                                                </td>


                                                <td>
                                                    {formatCurrency(
                                                        project.spent ||
                                                        0
                                                    )}
                                                </td>

                                            </tr>

                                        )
                                    )}

                                    </tbody>

                                </table>

                            </div>

                        </div>


                        {/* =========================
                            AI INSIGHTS
                        ========================= */}

                        <div className="report-section ai-report">

                            <h2>
                                🤖 AI Insights
                            </h2>


                            {highRiskProjects.length > 0 ? (

                                <p>
                                    ⚠️ There are{" "}
                                    <strong>
                                        {
                                            highRiskProjects.length
                                        }
                                    </strong>{" "}
                                    high-risk project(s)
                                    requiring attention.
                                </p>

                            ) : (

                                <p>
                                    ✅ No high-risk projects
                                    are currently detected.
                                </p>

                            )}


                            {budgetUsed >= 90 && (

                                <p>
                                    💰 Budget usage has reached
                                    <strong>
                                        {" "} {budgetUsed}%
                                    </strong>.
                                    Review project expenses.
                                </p>

                            )}


                            {averageProgress < 30 && (

                                <p>
                                    📈 Overall project progress
                                    is currently low.
                                    Consider reviewing project
                                    milestones.
                                </p>

                            )}


                            {averageProgress >= 70 && (

                                <p>
                                    🚀 Projects are progressing
                                    well with an average
                                    completion of{" "}
                                    <strong>
                                        {averageProgress}%
                                    </strong>.
                                </p>

                            )}

                        </div>


                    </>

                )}

            </div>

        </MainLayout>

    );

}

export default Reports;