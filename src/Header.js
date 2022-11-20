import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
// import AddPost from './AddPost'
// import AddPost from './AddPost'

const Header = () => {
  const [display, setDisplay] = useState(true);
  const history = useHistory();

  const loginHandler = () => {
    history.replace("/login");
    setDisplay(false);
  };

  // const logOutHandler=()=>{
  //     history.push('/')
  //     localStorage.removeItem('token')
  //     setDisplay(true)
  //     console.log(display)
  // }

  // const data= localStorage.getItem('token')

  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <img
            src="https://www.xhipment.com/assets/img/xhipment-logo.png"
            alt="xhipment"
            width="120"
            onClick={()=>{setDisplay(true)}}
          />
        </Link>
      </div>
      <div >
       <div className="header">  {display && <h3>Add, Del & Edit post Login first </h3>} </div>
        <div className="btn1">{display && <button onClick={loginHandler}>Login</button>}</div>
        {/* {data && !display && <button onClick={logOutHandler}>LogOut</button>} */}
      </div>
    </div>
  );
};

export default Header;
