
import { Link, } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {


  return (
    <>
      <div className="top-navbar fixed-top navbar-dark bg-dark">
        <div
          className="topbar-container container d-flex justify-content-between"
          
        >
          <div className="logo-container">
            <Link to="/" className="logo">
              <img
                src="https://res.cloudinary.com/hapiii/image/upload/v1650202719/logos/hwaomthmegmqe5rwst6q.png"
                alt="logo"
              />
              <span>Tv-Maze</span>
            </Link>
          </div>
          <div className="login-register">
            <Login />
            <Register />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Navbar;
