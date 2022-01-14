import React from "react";
import { Navbar, Sidebar } from "./components"
import { Home, Create } from "./pages"
import { SidebarProvider } from "./context/sideb-navb-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <SidebarProvider>
        <BrowserRouter>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </>
  );
}

export default App;
