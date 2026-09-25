import { FiArrowLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const NotFound = () => (
    <div className="not-found">
        <p className="not-found-code">404</p>
        <h1>Page not found</h1>
        <p>The route is not part of this tutorial collection yet.</p>
        <NavLink to="/">
            <FiArrowLeft />
            Return to overview
        </NavLink>
    </div>
);

export default NotFound;
