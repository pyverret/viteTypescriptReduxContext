import {Link, Routes} from "react-router-dom";

export default function () {
    return <nav>
            <Link to="/">Home</Link>
            <Link to="signup">Sign up</Link>
    </nav>;
}