import { Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div id="dashboard">
            <h1>Dashboard Summary</h1>
            <div id="Dashboard-details"><Outlet /></div>
        </div>
    )
}

export default Dashboard;