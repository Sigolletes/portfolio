import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="titleColor navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/roadmap">Roadmap</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;