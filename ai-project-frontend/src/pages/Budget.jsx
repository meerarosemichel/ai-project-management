import { useState } from "react";
import MainLayout from "../ layouts/MainLayout.jsx";
import { useProjects } from "../context/ProjectContext";
import "../styles/Budget.css";

function Budget() {

    const {
        projects,
        updateProjectBudget
    } = useProjects();


    const [selectedProject, setSelectedProject] =
        useState("");

    const [expense, setExpense] =
        useState("");


    // Find selected project
    const selectedProjectData = projects.find(
        (project) =>
            String(project.id) === String(selectedProject)
    );


    // =========================
    // TOTAL BUDGET
    // =========================

    const totalBudget = projects.reduce(
        (total, project) =>
            total + Number(project.budget || 0),
        0
    );


    // =========================
    // TOTAL SPENT
    // =========================

    const totalSpent = projects.reduce(
        (total, project) =>
            total + Number(project.spent || 0),
        0
    );


    // =========================
    // REMAINING
    // =========================

    const remainingBudget =
        totalBudget - totalSpent;


    // =========================
    // BUDGET USED %
    // =========================

    const budgetPercentage =
        totalBudget > 0
            ? Math.min(
                Math.round(
                    (totalSpent / totalBudget) * 100
                ),
                100
            )
            : 0;


    // =========================
    // SELECTED PROJECT DATA
    // =========================

    const projectBudget =
        selectedProjectData
            ? Number(selectedProjectData.budget || 0)
            : 0;


    const projectSpent =
        selectedProjectData
            ? Number(selectedProjectData.spent || 0)
            : 0;


    const projectRemaining =
        projectBudget - projectSpent;


    const projectPercentage =
        projectBudget > 0
            ? Math.min(
                Math.round(
                    (projectSpent / projectBudget) * 100
                ),
                100
            )
            : 0;


    // =========================
    // CURRENCY FORMAT
    // =========================

    const formatCurrency = (amount) => {

        return `₹${Number(amount).toLocaleString("en-IN")}`;

    };


    // =========================
    // ADD EXPENSE
    // =========================

    const handleAddExpense = () => {

        if (!selectedProject) {

            alert("Please select a project.");

            return;

        }


        const expenseAmount =
            Number(expense);


        if (!expenseAmount || expenseAmount <= 0) {

            alert("Please enter a valid expense amount.");

            return;

        }


        const project =
            projects.find(
                (item) =>
                    String(item.id) ===
                    String(selectedProject)
            );


        if (!project) {

            alert("Project not found.");

            return;

        }


        const currentSpent =
            Number(project.spent || 0);


        const projectBudget =
            Number(project.budget || 0);


        const newSpent =
            currentSpent + expenseAmount;


        // Prevent budget overflow
        if (newSpent > projectBudget) {

            alert(
                `Expense exceeds the remaining budget.\n\nRemaining budget: ${formatCurrency(
                    projectBudget - currentSpent
                )}`
            );

            return;

        }


        // Update project
        updateProjectBudget(
            Number(selectedProject),
            expenseAmount
        );


        // Clear input
        setExpense("");


        alert("Expense added successfully!");

    };


    return (

        <MainLayout>

            <div className="budget-page">


                {/* =========================
                    HEADER
                ========================= */}

                <div className="budget-header">

                    <h1>
                        💰 Budget Tracking
                    </h1>

                    <p>
                        Monitor project budgets,
                        expenses and remaining funds.
                    </p>

                </div>


                {/* =========================
                    NO PROJECTS
                ========================= */}

                {projects.length === 0 ? (

                    <div className="budget-empty">

                        <div className="budget-empty-icon">
                            💰
                        </div>

                        <h2>
                            No Projects Available
                        </h2>

                        <p>
                            Create a project first
                            to track its budget.
                        </p>

                    </div>

                ) : (

                    <>


                        {/* =========================
                            SUMMARY CARDS
                        ========================= */}

                        <div className="budget-summary">


                            <div className="budget-card">

                                <div className="budget-card-icon">
                                    💵
                                </div>

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

                            </div>


                            <div className="budget-card">

                                <div className="budget-card-icon spent-icon">
                                    📊
                                </div>

                                <div>

                                    <span>
                                        Total Spent
                                    </span>

                                    <strong>
                                        {formatCurrency(
                                            totalSpent
                                        )}
                                    </strong>

                                </div>

                            </div>


                            <div className="budget-card">

                                <div className="budget-card-icon remaining-icon">
                                    💰
                                </div>

                                <div>

                                    <span>
                                        Remaining
                                    </span>

                                    <strong>
                                        {formatCurrency(
                                            remainingBudget
                                        )}
                                    </strong>

                                </div>

                            </div>


                            <div className="budget-card">

                                <div className="budget-card-icon usage-icon">
                                    📈
                                </div>

                                <div>

                                    <span>
                                        Budget Used
                                    </span>

                                    <strong>
                                        {budgetPercentage}%
                                    </strong>

                                </div>

                            </div>

                        </div>


                        {/* =========================
                            OVERALL BUDGET
                        ========================= */}

                        <div className="budget-section">

                            <div className="section-title">

                                <h2>
                                    📊 Overall Budget Usage
                                </h2>

                                <strong>
                                    {budgetPercentage}%
                                </strong>

                            </div>


                            <div className="budget-progress-bar">

                                <div
                                    className={`budget-progress-fill ${
                                        budgetPercentage >= 90
                                            ? "danger"
                                            : budgetPercentage >= 70
                                                ? "warning"
                                                : ""
                                    }`}
                                    style={{
                                        width:
                                            `${budgetPercentage}%`
                                    }}
                                />

                            </div>


                            <div className="budget-progress-info">

                                <span>
                                    Spent:
                                    {" "}
                                    {formatCurrency(
                                        totalSpent
                                    )}
                                </span>

                                <span>
                                    Budget:
                                    {" "}
                                    {formatCurrency(
                                        totalBudget
                                    )}
                                </span>

                            </div>

                        </div>


                        {/* =========================
                            PROJECT BUDGET
                        ========================= */}

                        <div className="budget-section">

                            <h2>
                                📁 Project Budget
                            </h2>


                            <select
                                className="project-select"
                                value={selectedProject}
                                onChange={(e) => {

                                    setSelectedProject(
                                        e.target.value
                                    );

                                    setExpense("");

                                }}
                            >

                                <option value="">
                                    -- Select a Project --
                                </option>


                                {projects.map(
                                    (project) => (

                                        <option
                                            key={project.id}
                                            value={project.id}
                                        >
                                            {project.name}
                                        </option>

                                    )
                                )}

                            </select>


                            {selectedProjectData && (

                                <div className="selected-budget">


                                    {/* PROJECT HEADER */}

                                    <div className="selected-budget-header">

                                        <div>

                                            <h3>
                                                {
                                                    selectedProjectData.name
                                                }
                                            </h3>

                                            <p>
                                                Project Budget Overview
                                            </p>

                                        </div>


                                        <strong>
                                            {projectPercentage}%
                                        </strong>

                                    </div>


                                    {/* DETAILS */}

                                    <div className="budget-details">


                                        <div>

                                            <span>
                                                Total Budget
                                            </span>

                                            <strong>
                                                {formatCurrency(
                                                    projectBudget
                                                )}
                                            </strong>

                                        </div>


                                        <div>

                                            <span>
                                                Total Spent
                                            </span>

                                            <strong className="spent-text">
                                                {formatCurrency(
                                                    projectSpent
                                                )}
                                            </strong>

                                        </div>


                                        <div>

                                            <span>
                                                Remaining
                                            </span>

                                            <strong className="remaining-text">
                                                {formatCurrency(
                                                    projectRemaining
                                                )}
                                            </strong>

                                        </div>


                                    </div>


                                    {/* PROGRESS */}

                                    <div className="budget-progress-bar">

                                        <div
                                            className={`budget-progress-fill ${
                                                projectPercentage >= 90
                                                    ? "danger"
                                                    : projectPercentage >= 70
                                                        ? "warning"
                                                        : ""
                                            }`}
                                            style={{
                                                width:
                                                    `${projectPercentage}%`
                                            }}
                                        />

                                    </div>


                                    {/* =========================
                                        ADD EXPENSE
                                    ========================= */}

                                    <div className="expense-box">

                                        <h3>
                                            💳 Add Project Expense
                                        </h3>

                                        <p>
                                            Enter an expense to
                                            automatically update
                                            spent and remaining
                                            budget.
                                        </p>


                                        <div className="expense-input-row">

                                            <input
                                                type="number"
                                                min="1"
                                                placeholder="Enter expense amount"
                                                value={expense}
                                                onChange={(e) =>
                                                    setExpense(
                                                        e.target.value
                                                    )
                                                }
                                            />


                                            <button
                                                onClick={
                                                    handleAddExpense
                                                }
                                            >
                                                + Add Expense
                                            </button>

                                        </div>

                                    </div>


                                    {/* WARNING */}

                                    {projectPercentage >= 90 && (

                                        <div className="budget-warning danger-warning">

                                            ⚠️ Budget is almost
                                            exhausted.
                                            Immediate attention
                                            is required.

                                        </div>

                                    )}


                                    {projectPercentage >= 70 &&
                                        projectPercentage < 90 && (

                                            <div className="budget-warning">

                                                ⚠️ Budget usage is
                                                high. Monitor
                                                project expenses.

                                            </div>

                                        )}


                                    {projectPercentage < 70 && (

                                        <div className="budget-success">

                                            ✅ Budget usage is
                                            currently under
                                            control.

                                        </div>

                                    )}

                                </div>

                            )}

                        </div>


                        {/* =========================
                            ALL PROJECTS
                        ========================= */}

                        <div className="budget-section">

                            <h2>
                                📋 Project-wise Budget
                            </h2>


                            <div className="project-budget-list">

                                {projects.map(
                                    (project) => {

                                        const budget =
                                            Number(
                                                project.budget || 0
                                            );

                                        const spent =
                                            Number(
                                                project.spent || 0
                                            );


                                        const percentage =
                                            budget > 0
                                                ? Math.min(
                                                    Math.round(
                                                        (spent /
                                                            budget) *
                                                        100
                                                    ),
                                                    100
                                                )
                                                : 0;


                                        return (

                                            <div
                                                className="project-budget-item"
                                                key={project.id}
                                            >

                                                <div className="project-budget-header">

                                                    <span>
                                                        {
                                                            project.name
                                                        }
                                                    </span>

                                                    <strong>
                                                        {percentage}%
                                                    </strong>

                                                </div>


                                                <div className="budget-progress-bar small">

                                                    <div
                                                        className={`budget-progress-fill ${
                                                            percentage >= 90
                                                                ? "danger"
                                                                : percentage >= 70
                                                                    ? "warning"
                                                                    : ""
                                                        }`}
                                                        style={{
                                                            width:
                                                                `${percentage}%`
                                                        }}
                                                    />

                                                </div>


                                                <div className="project-budget-footer">

                                                    <span>
                                                        Spent:
                                                        {" "}
                                                        {formatCurrency(
                                                            spent
                                                        )}
                                                    </span>

                                                    <span>
                                                        Budget:
                                                        {" "}
                                                        {formatCurrency(
                                                            budget
                                                        )}
                                                    </span>

                                                </div>

                                            </div>

                                        );

                                    }
                                )}

                            </div>

                        </div>

                    </>

                )}

            </div>

        </MainLayout>

    );
}

export default Budget;