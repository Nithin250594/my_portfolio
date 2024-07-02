
import "./index.css"

const NavBar=()=>{
    return(
        <nav className="nav-bar">
            <div className="logo-section">
            <h1 className="ns-logo">NS</h1>
            <h1 className="nav-logo">Nithin Sai</h1>
            </div>
            
            <ul className="nav-links-list">
                <li className="nav-link">Home</li>
                <li className="nav-link">About</li>
                <li className="nav-link">Skills</li>
                <li className="nav-link">Works</li>
                <li className="nav-link">Contact</li>
            </ul>

        </nav>
    )

}

export default NavBar