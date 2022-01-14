import React from "react";
import styled from "styled-components";
import { useSidebarContext } from "../context/sideb-navb-context";

const Home = () => {
  const { isSidebarOpen } = useSidebarContext();
  return (
    <ContentWrapper>
      <div
        className={`${isSidebarOpen ? "sidebar-is-open" : "sidebar-is-closed"}`}
      >
        <p>Welcome to Ipsum Console</p>

        <p className="child">
          Lorem’s Dashboard integrated with Ipsum’s API providing tasks
          management and more.
        </p>
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  display: inline-block;
  color: var(--primary-grey-2);
  margin-top: 6rem;
  font-weight: 200;
  p {
    font-size: 4rem;
  }
  .child {
    font-size: 2rem;
  }
`;

export default Home;
