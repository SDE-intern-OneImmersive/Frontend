import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
        <div id="sidebar" >
            <div>
                <img src="src\assets\icon.jpg" alt="One Immersive" width= "100px"  />
            </div>
            <h1>Scalable Pixel Streaming</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={'/applications'}>Application</Link>
                    </li>
                    <li>
                        <Link to={"/version"}>Version</Link>
                    </li>
                    <li>
                        <Link to={"/billing"}>Billing</Link>
                    </li>
                    <li>
                        <Link to={"/profile"}>Profile</Link>
                    </li>
                    <li>
                        <Link to={"/logout"}>Log out</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    </>
    )
}