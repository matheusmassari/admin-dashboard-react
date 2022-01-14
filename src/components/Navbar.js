import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import logo from "../assets/logo.svg";
import { useSidebarContext } from "../context/sideb-navb-context";
import styled from "styled-components";

const Navbar = () => {
  const { toggleSidebar, isSidebarOpen } = useSidebarContext();
  
  return (
    <HeaderWrapper>
      <div className="logo-menu-wrapper">
        <button
          onClick={toggleSidebar}
          className={`${isSidebarOpen ? "nav-toggle open" : "nav-toggle"}`}
        >
          <AiOutlineMenu size="32" />
        </button>
        <img src={logo} alt="scriptask logo" />
      </div>
      <div className="profile-wrapper">
        <p>Doe, John (J.D)</p>
        <button className="profile-toggle">
          <FiLogOut size="32" />
        </button>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.nav`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: var(--light-shadow);
  background-color: white;

  img {
    transition: var(--transition);
  }

  div {
    margin-right: 2rem;
  }

  .nav-toggle {
    font-size: 1.5rem;
    color: var(--primary-grey);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
    margin-right: 3rem;
  }
  .open {
    transform: scale(1.2);
  }

  .profile-toggle {
    color: var(--primary-grey);
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      transform: scale(1.1);
    }
  }
  .profile-wrapper {
    display: flex;
    align-items: center;
    p {
      color: var(--primary-grey);
      margin-right: 2rem;
    }
  }
`;

export default Navbar;
