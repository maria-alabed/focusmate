import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  // بيانات الأدمن الثابتة
  const ADMIN_EMAIL = "mariaalabed6@gmail.com";
  const ADMIN_PASSWORD = "4444";

  /* تسجيل الدخول */
  const handleLogin = (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    localStorage.setItem("isAdmin", "true"); // 👈 حماية
    navigate("/admin");
  } else {
    alert("Invalid email or password");
  }
};


  /* إنشاء حساب */
  const handleSignup = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    // ❌ منع إنشاء حساب أدمن
    if (email === ADMIN_EMAIL) {
      alert("Admin account cannot be created");
      return;
    }

    alert("Account created successfully (demo)");
    setIsSignup(false); // يرجع على تسجيل الدخول
  };

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

                <form className="login-form" onSubmit={handleLogin}>
                  <input
                    name="email"
                    className="login-input"
                    placeholder="Email"
                  />
                  <input
                    name="password"
                    type="password"
                    className="login-input"
                    placeholder="Password"
                  />

                  <button className="login-btn">Login</button>
                </form>

                <p className="signup-text">
                  Don’t have an account?
                  <span onClick={() => setIsSignup(true)}>
                    {" "}
                    Create account
                  </span>
                </p>
              </>
            ) : (
              <>
                <h1 className="login-title">Sign Up</h1>

                <form className="login-form" onSubmit={handleSignup}>
                  <input
                    className="login-input"
                    placeholder="Full name"
                  />
                  <input
                    name="email"
                    className="login-input"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    className="login-input"
                    placeholder="Password"
                  />

                  <button className="login-btn">
                    Create Account
                  </button>
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
