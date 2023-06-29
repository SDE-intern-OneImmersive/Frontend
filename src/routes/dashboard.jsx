export default function Dashboard() {
    return (
        <div id ="dashboard">
            <h1>Dashboard Summary</h1>
        <div id="Application-table">
            <h2>Applications</h2>
            <table>
                <tr>
                    <th>Application Name</th>
                    <th>Application Type</th>
                    <th>Application Status</th>
                    <th>Application Version</th>
                    <th>Application URL</th>
                </tr>
                <tr>
                    <td>Application 1</td>
                    <td>Application Type 1</td>
                    <td>Application Status 1</td>
                    <td>Application Version 1</td>
                    <td>Application URL 1</td>
                </tr>
                <tr>
                    <td>Application 2</td>
                    <td>Application Type 2</td>
                    <td>Application Status 2</td>
                    <td>Application Version 2</td>
                    <td>Application URL 2</td>
                </tr>
            </table>   
        </div>
        </div>
    )
}