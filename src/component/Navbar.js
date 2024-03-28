import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
  return (
    <div>
      <Container className="first-nav">
        <Row>
          <Col></Col>
          {/* 첫번째 : 로고, 로그인, 서치 */}
          <Col>
            <Link to="/">
              <img
                className="logo"
                src="https://www.prada.com/etc/designs/aem-prada-innova…ntlib-resources/resources/images/logo_prada_b.svg"
                alt="logo"
              />
            </Link>
          </Col>
          <Col className="first-nav-login">
            <span className="link" onClick={loginOut}>
              <FontAwesomeIcon icon={faUser} />
              <span>{authenticate === true ? 'Logout' : 'Login'}</span>
            </span>
            <span className="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input type="text" className="s-input" />
            </span>
          </Col>
        </Row>
      </Container>
      <div>
        {/* 두번째 : 메뉴바 */}
        <ul className="menu-bar">
          {menuList.map((n) => (
            <li>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
