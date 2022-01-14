import React, { useState, useContext } from "react";

const SidebarContext = React.createContext()

const SidebarProvider = ({children}) => {
    //States
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showRoles, setShowRoles] = useState(false);
    const [userRole, setUserRole] = useState({
      repoter: true,
      assignee: false,
    });
    //Functions
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const handleShowRoles = () => setShowRoles(!showRoles);
    const handleReporterTrue = () =>
      setUserRole({ reporter: true, assignee: false });
    const handleAssigneeTrue = () =>
      setUserRole({ reporter: false, assignee: true });

    return (
        <SidebarContext.Provider value={{
            isSidebarOpen,
            setIsSidebarOpen,
            toggleSidebar,
            userRole,
            setUserRole,
            handleShowRoles,
            handleReporterTrue,
            handleAssigneeTrue,
            showRoles,
            setShowRoles,
        }}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

export { SidebarContext, SidebarProvider };