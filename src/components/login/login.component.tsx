import React, {useState} from 'react'

import { FunctionComponent } from "react";
import "../../styles/login/login.styles.css";
import logo from "../../img/logo1.png";


interface LoginProps {}


interface IUser {
 
  userName: string;
  password : string
}
const Login: FunctionComponent<LoginProps> = () => {

  const [userName, setUserName] = useState<IUser>()


 
  return (
    <div className="d-flex login-main ">
      <div
        className="mr-auto p-2 w-50 left-section"
        style={{ backgroundImage: `url(${logo})`,    backgroundSize: "100% 100%"      }}
      >
        {/* <img src={logo} alt="athlete's aid logo" /> */}
        Flex item
      </div>
      <div className="p-2 w-50 my-auto">
        <form className="shadow-lg p-3 mb-5 bg-secondary rounded text-white me-5 ms-5  ">
          <h3>Log In</h3>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            {/* <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small> */}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          {/* <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button type="submit" className="btn btn-primary mt-3">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
