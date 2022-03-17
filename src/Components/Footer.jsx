import {Link} from "react-router-dom";

function Footer(){
    return (
        <footer className="footer-unauthenticated text-lt">
            <p><Link className="signin-link" to={"/signin"}>Sign in</Link> or <Link className="register-link" to={"/signup"}>Sign up</Link> to add comments on this article</p>
        </footer>
    )
}

export default Footer;