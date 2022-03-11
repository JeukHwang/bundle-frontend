import { Link } from "react-router-dom";

function Front() {
    return (
        <div className="front">
            <h1>Main page for BUNDLE Game</h1>
            <Link to="/signin">Sign in</Link>
            <Link to="/signup">Sign up</Link>
        </div>
    );
}

export default Front;
