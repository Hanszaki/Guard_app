import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BsFillBellFill, BsFillEnvelopeFill, BsFillGearFill, BsSearch, BsJustify } from "react-icons/bs";

export const Header = ({ OpenSidebar }) => {
  const [name, setName] = useState("");
  const history = useHistory();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const text = {
    color: "grey",
  };

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token");
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      console.log(decoded);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        history.push("/");
      }
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
         <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <img width="40" height="40" src="https://img.icons8.com/dusk/64/shield.png" alt="shield" />
      </div>
      <a href="dashboard" className='header-brand'>
        Guard Management System
      </a>
      <div className='header-right'>
        <div className="navbar-item has-dropdown is-hoverable" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <a className="navbar-link is-arrowless">
            <BsFillGearFill className='icon' />
          </a>

          {isDropdownVisible && (
            <div className="navbar-dropdown is-right">
              <a className="navbar-item" style={text}>
                About
              </a>
              <hr className="navbar-divider" />
              <a onClick={Logout} className="navbar-item" style={text}>
                Log Out
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;