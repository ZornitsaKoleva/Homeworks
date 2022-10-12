import { Link } from "react-router-dom";

export default function Navigation() {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <img style={{height:60}} src="./4697260-removebg-preview.png"></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to='/home'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to='/create-to-do'>Create to do list</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to='/history'>History</Link>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}