import React from "react";
import { links } from "../utils/constants";
import { useSidebarContext } from "../context/sideb-navb-context";
import styled from "styled-components";
import role from "../assets/role.svg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const {
    isSidebarOpen,
    userRole,
    showRoles,
    handleShowRoles,
    handleReporterTrue,
    handleAssigneeTrue,
  } = useSidebarContext();
  
  return (
    <SidebarWrapper>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          {links.map(({ id, url, text, imgUrl }) => {
            return (
              <Link to={url} key={id} className="sidebar-link">
                {imgUrl}
                <p>{text}</p>
              </Link>
            );
          })}
          <ul className="set-roles-wrapper">
            <img src={role} alt="set roles" />
            <button
              className="btn"
              type="button"
              onClick={() => handleShowRoles()}
            >
              Set Roles
            </button>
          </ul>
          {showRoles && (
            <div className="roles-children">
              <button
                className={`${
                  userRole.reporter ? "btn children checked" : "btn children"
                }`}
                type="button"
                onClick={() => handleReporterTrue()}
              >
                Reporter
              </button>
              <button
                className={`${
                  userRole.assignee ? "btn children checked" : "btn children"
                }`}
                type="button"
                onClick={() => handleAssigneeTrue()}
              >
                Assignee
              </button>
            </div>
          )}
        </div>
        <div className="policy">
          <p>&copy; {new Date().getFullYear()} Company | All rights reserved</p>
          <a href="/home">Privacy Policy</a>
          <a href="/home">Terms of Use</a>
        </div>
      </aside>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.aside`
  font-family: Montserrat, sans-serif;
  position: fixed;
  top: 4.7rem;
  box-sizing: border-box;

  .sidebar {
    background-color: white;
    padding: 1.5rem 0 1.5rem 1.5rem;
    max-width: 200px;
    height: 92vh;
    box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--primary-grey);
    transition: var(--transition);
    transform: translate(-100%);
  }

  .show-sidebar {
    transform: translate(0);
  }

  .sidebar-header {
    display: flex;
    flex-direction: column;

    a {
      display: flex;
      text-decoration: none;
      align-items: center;
      margin-bottom: 1rem;
      p {
        width: 100%;
        margin-left: 1.5rem;
        color: var(--primary-grey);
        &:hover {
          border-right: 4px solid var(--primary-blue-4);
          color: var(--primary-blue-4);
        }
      }
    }
  }
  .set-roles-wrapper {
    display: flex;
    flex-direction: row;
    button {
      margin-left: 1.5rem;
    }
  }

  .btn {
    background: none;
    background-color: none;
    height: 1.5rem;
    text-align: left;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    padding-top: 0.15rem;
    width: 100%;
    &:hover {
      border-right: 4px solid var(--primary-blue-4);
      color: var(--primary-blue-4);
    }
  }

  .children {
    margin-top: 1rem;
  }
  .checked {
    border-right: 4px solid var(--primary-blue-4);
    color: var(--primary-blue-4);
  }

  .roles-children {
    margin-left: 4rem;
  }
  .policy {
    display: flex;
    flex-direction: column;
    a {
      margin-top: 1rem;
      text-decoration: none;
      color: var(--link);
    }
  }
`;

export default Sidebar;
