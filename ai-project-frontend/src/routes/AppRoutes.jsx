import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import CreateProject from "../pages/CreateProject";
import AIPlanner from "../pages/AIPlanner";
import RiskPrediction from "../pages/RiskPrediction";
import ResourceAllocation from "../pages/ResourceAllocation";
import Progress from "../pages/Progress";
import Budget from "../pages/Budget";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";
import Logout from "../pages/Logout";
function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>

                {/* Login */}
                <Route
                    path="/"
                    element={<Login />}
                />

                {/* Dashboard */}
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                {/* Projects */}
                <Route
                    path="/projects"
                    element={<Projects />}
                />

                {/* Create Project */}
                <Route
                    path="/create-project"
                    element={<CreateProject />}
                />

                {/* AI Planner */}
                <Route
                    path="/ai-planner"
                    element={<AIPlanner />}
                />

                {/* Risk Prediction */}
                <Route
                    path="/risk-prediction"
                    element={<RiskPrediction />}
                />

                {/* Resource Allocation */}
                <Route
                    path="/resource-allocation"
                    element={<ResourceAllocation />}
                />

                {/* Progress */}
                <Route
                    path="/progress"
                    element={<Progress />}
                />

                {/* Budget */}
                <Route
                    path="/budget"
                    element={<Budget />}
                />

                {/* Reports */}
                <Route
                    path="/reports"
                    element={<Reports />}
                />

                {/* Settings */}
                <Route
                    path="/settings"
                    element={<Settings />}
                />
                {/*<Route*/}
                {/*    path="/settings"*/}
                {/*    element={*/}
                {/*        <h1>Settings</h1>*/}
                {/*    }*/}
                {/*/>*/}

                {/* 404 */}
                <Route
                    path="*"
                    element={<NotFound />}
                />
                <Route
                    path="/logout"
                    element={<Logout />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;