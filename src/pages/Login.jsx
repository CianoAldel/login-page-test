// import Google from "../img/google.png";
// import Facebook from "../img/facebook.png";
// import Github from "../img/github.png";

const Login = () => {
  const google = () => {
    window.open("http://localhost:5001/authorization/google", "_self");
  };

  const line = () => {
    window.open("http://localhost:5001/authorization/line/login/page", "_self");
  };

  const facebook = () => {

    window.open("https://27a7-2403-6200-8958-5146-cdc5-f967-e077-fd13.ap.ngrok.io/authorization/facebook", "_self");
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            {/* <img src={Google} alt="" className="icon" /> */}
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            {/* <img src={Facebook} alt="" className="icon" /> */}
            Facebook
          </div>
          <div className="loginButton github" onClick={line}>
            {/* <img src={Github} alt="" className="icon" /> */}
            line
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;