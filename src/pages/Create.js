import React from "react";
import styled from "styled-components";
import { useSidebarContext } from "../context/sideb-navb-context";

const Create = () => {
  const { isSidebarOpen } = useSidebarContext();
  return (
    <>
      <ContentWrapper>
        <div
          className={`${
            isSidebarOpen ? "sidebar-is-open" : "sidebar-is-closed"
          }`}
        >
          <p className="title">Create Tasks page</p>
          <p className="paragraph">This feature is under development.</p>
        </div>
      </ContentWrapper>
    </>
  );
};

const ContentWrapper = styled.div`
  display: inline-block;
  color: var(--primary-grey-2);
  margin-top: 6rem;
  font-family: Montserrat, sans-serif;
  font-weight: 200;
  .title {
    font-size: 4rem;
  }
  .paragraph {
    font-size: 2rem;
  }
`;

export default Create;
