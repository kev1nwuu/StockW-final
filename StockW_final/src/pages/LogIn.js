import styles from "../pages_css/Log_in.css";
import logo from '../images/linkedin_banner_image_1.png';

const LogIn = () => {

    const handleSignUp = (e) => {
        e.preventDefault();
        
        window.location.href = '/';
    };

    const handleVisitor = () => {
        
        window.location.href = '/';
    };






    return (
        <div className="signup-form">
            <div className="navbar-logo">
                <span>S</span>
                <span>t</span>
                <span>o</span>
                <span>c</span>
                <span>k</span>
                <span>W</span>
            </div>
            <div className="form-container">
                <div className="form-title">
                    <h2>Log In</h2>
                    <div className="form-subtitle">Hi there!</div>
                </div>

                <form className="form" onSubmit={handleSignUp}>
                    <div className="form-field">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-input"
                            id="email"
                            placeholder="me@company.com"
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-input"
                            id="password"
                            placeholder="password..."
                        />
                    </div>
                    <button type="submit" className="form-button">
                        Log In
                    </button>

                </form>

                <div className="form-text">or</div>

                <button className="form-button visitor-button" onClick={handleVisitor}>
                    Visitor
                </button>
            </div>
        </div>
    )
};


export default LogIn;