import "./resister.css";

export default function Resister() {
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
                <input placeholder="User Name" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <input placeholder="password again " className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <button className="loginResister">Login to your Account</button>
            </div>
        </div>
      </div>
    </div>
  );
}
