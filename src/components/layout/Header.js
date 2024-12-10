import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/UseAuth";
import styled from "styled-components";
const HeaderContainer = styled.header`
  background-color: #000000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 0;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 0;
`;
const Header = () => {
  const { currentUser, setCredentials } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setCredentials(null);
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>Microblog</Logo>
        <NavLinks>
          {currentUser ? (
            <>
              <NavLink to="/posts">Posts</NavLink>
              <NavLink to={`/users/${currentUser.username}`}>Profile</NavLink>
              <NavButton onClick={handleLogout}>Logout</NavButton>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};
export default Header;
