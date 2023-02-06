import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Media</h3>
          <span className="loginDesc">
            Connect with friend and the world arround you on Social Media
          </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className="loginInput" />
                <input placeholder="password" className="loginInput" />
                <button className="loginButton">Login</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginResister">Create a new account</button>
            </div>
        </div>
      </div>
    </div>
  );
}
