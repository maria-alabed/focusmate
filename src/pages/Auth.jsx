import { useState } from "react";
import "../styles/Auth.css";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="login-container">

      <img
        src={process.env.PUBLIC_URL + "/images/background.png"}
        className="background-image"
        alt="AI Eye"
      />

      <div className={`cards-wrapper ${isSignup ? "signup-mode" : ""}`}>

        {/* الكرت اليسار */}
        <div className="login-card">
            <div className="card-content">
          {!isSignup ? (
            <>
              <h1 className="login-title">Welcome</h1>
              <p className="login-subtitle">
                Smart Classroom Attention Monitoring System
              </p>
            </>
          ) : (
            <>
              <h1 className="login-title">Create Account</h1>
              <p className="login-subtitle">
                Create your account to start monitoring
              </p>
            </>
          )}
          </div>
        </div>

        {/* الكرت اليمين */}
        <div className="login-card">
           <div className="card-content">
          {!isSignup ? (
            <>
              <h1 className="login-title">Sign In</h1>

              <form className="login-form">
                <input className="login-input" placeholder="Email" />
                <input className="login-input" placeholder="Password" />

                <button className="login-btn">Login</button>
              </form>

              <p className="signup-text">
                Don’t have an account?
                <span onClick={() => setIsSignup(true)}> Create account</span>
              </p>
            </>
          ) : (
            <>
              <h1 className="login-title">Sign Up</h1>

              <form className="login-form">
                <input className="login-input" placeholder="Full name" />
                <input className="login-input" placeholder="Email" />
                <input className="login-input" placeholder="Password" />

                <button className="login-btn">Create Account</button>
              </form>
            </>
          )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Auth;
