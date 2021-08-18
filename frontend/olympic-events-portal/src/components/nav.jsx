import { Link } from "react-router-dom"
export default function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="nav-btn">
        All Sports
      </Link>
      <Link to="/add-sport" className="nav-btn">
        Add Sport
      </Link>
    </div>
  )
}
