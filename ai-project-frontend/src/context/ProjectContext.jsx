import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export function ProjectProvider({ children }) {

    const [projects, setProjects] = useState([]);


    // ==========================================
    // ADD PROJECT
    // ==========================================

    const addProject = (project) => {

        const newProject = {

            ...project,

            id: Date.now(),

            // Financial values
            budget: Number(project.budget || 0),
            spent: Number(project.spent || 0),

            // Progress
            progress: Number(project.progress || 0),

            // Team
            developers: project.developers || [],
            teamSize: Number(project.teamSize || 0),

            // Technology
            technologies: project.technologies || [],

            // Project planning
            milestones: project.milestones || [],

            // Default status
            status: project.status || "Active",

            // Created date
            createdAt: new Date().toISOString(),

        };


        setProjects((prevProjects) => [

            ...prevProjects,

            newProject,

        ]);

    };


    // ==========================================
    // UPDATE PROJECT
    // ==========================================

    const updateProject = (id, updatedData) => {

        setProjects((prevProjects) =>

            prevProjects.map((project) =>

                String(project.id) === String(id)

                    ? {
                        ...project,
                        ...updatedData,
                    }

                    : project

            )

        );

    };


    // ==========================================
    // UPDATE PROJECT PROGRESS
    // ==========================================

    const updateProjectProgress = (id, progress) => {

        const newProgress = Math.max(
            0,
            Math.min(100, Number(progress))
        );


        setProjects((prevProjects) =>

            prevProjects.map((project) => {

                if (
                    String(project.id) !==
                    String(id)
                ) {
                    return project;
                }


                let newStatus =
                    project.status || "Active";


                if (newProgress >= 100) {

                    newStatus = "Completed";

                } else if (newProgress > 0) {

                    newStatus = "Active";

                }


                return {

                    ...project,

                    progress: newProgress,

                    status: newStatus,

                };

            })

        );

    };


    // ==========================================
    // ADD EXPENSE
    // ==========================================

    const updateProjectBudget = (
        id,
        expense
    ) => {

        const newExpense =
            Number(expense || 0);


        if (newExpense <= 0) {
            return;
        }


        setProjects((prevProjects) =>

            prevProjects.map((project) => {

                if (
                    String(project.id) !==
                    String(id)
                ) {
                    return project;
                }


                const currentSpent =
                    Number(
                        project.spent || 0
                    );


                const budget =
                    Number(
                        project.budget || 0
                    );


                const newSpent =
                    currentSpent +
                    newExpense;


                // Do not allow spending
                // above the project budget

                if (newSpent > budget) {

                    return project;

                }


                return {

                    ...project,

                    spent: newSpent,

                };

            })

        );

    };


    // ==========================================
    // REMAINING BUDGET
    // ==========================================

    const getRemainingBudget = (project) => {

        const budget =
            Number(project?.budget || 0);


        const spent =
            Number(project?.spent || 0);


        return Math.max(
            0,
            budget - spent
        );

    };


    // ==========================================
    // PROJECT BUDGET PERCENTAGE
    // ==========================================

    const getBudgetUsedPercentage = (
        project
    ) => {

        const budget =
            Number(project?.budget || 0);


        const spent =
            Number(project?.spent || 0);


        if (budget <= 0) {
            return 0;
        }


        return Math.min(
            100,
            Math.round(
                (spent / budget) * 100
            )
        );

    };


    // ==========================================
    // UPDATE MILESTONE
    // ==========================================

    const updateMilestone = (
        projectId,
        milestoneId,
        completed
    ) => {

        setProjects((prevProjects) =>

            prevProjects.map((project) => {

                if (
                    String(project.id) !==
                    String(projectId)
                ) {
                    return project;
                }


                const milestones =
                    project.milestones || [];


                const updatedMilestones =
                    milestones.map(
                        (milestone) =>

                            String(
                                milestone.id
                            ) ===
                            String(
                                milestoneId
                            )

                                ? {
                                    ...milestone,
                                    completed,
                                }

                                : milestone
                    );


                // Automatically calculate
                // project progress

                const completedCount =
                    updatedMilestones.filter(
                        (milestone) =>
                            milestone.completed
                    ).length;


                const totalCount =
                    updatedMilestones.length;


                const progress =
                    totalCount > 0
                        ? Math.round(
                            (
                                completedCount /
                                totalCount
                            ) * 100
                        )
                        : Number(
                            project.progress || 0
                        );


                const status =
                    progress >= 100
                        ? "Completed"
                        : progress > 0
                            ? "Active"
                            : project.status ||
                            "Active";


                return {

                    ...project,

                    milestones:
                    updatedMilestones,

                    progress,

                    status,

                };

            })

        );

    };


    return (

        <ProjectContext.Provider
            value={{

                projects,

                addProject,

                updateProject,

                updateProjectProgress,

                updateProjectBudget,

                getRemainingBudget,

                getBudgetUsedPercentage,

                updateMilestone,

            }}
        >

            {children}

        </ProjectContext.Provider>

    );

}


export function useProjects() {

    return useContext(ProjectContext);

}