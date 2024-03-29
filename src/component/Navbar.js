import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  let menuList = ['여성', '남성', '백', '기프트', '리네아 로사', 'PRADASPHERE'];

  const loginOut = () => {
    // login 0 -> t -> click -> f,/
    // login X -> f -> click -> f, /login
    if (authenticate === true) {
      setAuthenticate(false);
      navigate('/');
    } else {
      setAuthenticate(false);
      navigate('/login');
    }
  };

  const search = (e) => {
    if (e.key === 'Enter') {
      let keyWord = e.target.value;
      navigate(`/?q=${keyWord}`);
    }
  };

  return (
    <div>
      <div className="nav-box">
        <div className="first-nav">
          <div className="search-area">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
              type="text"
              className="search-input"
              onKeyPress={(e) => search(e)}
            />
          </div>

          <div>
            <Link to="/">
              <img
                className="logo"
                src="https://www.prada.com/etc/designs/aem-prada-innova…ntlib-resources/resources/images/logo_prada_b.svg"
                alt="logo"
              />
            </Link>
          </div>

          <div className="login-area" onClick={loginOut}>
            <FontAwesomeIcon icon={faUser} />
            <div>{authenticate === true ? 'Logout' : 'Login'}</div>
            {/* <div className="mobile-menu-bar">
            ≡
            <div>
              {menuList.map((n) => (
                <div className="mobile-menu-bar-child">{n}</div>
              ))}
            </div>
          </div> */}
          </div>
        </div>
        <div>
          <ul className="menu-bar">
            {menuList.map((n) => (
              <li>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
