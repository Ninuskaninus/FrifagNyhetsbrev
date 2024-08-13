import React from "react";
import Nav from "../components/nav";
import StickyMessage from "../components/stickyMessage";

export default function Layout({ children }) {
  return (
    <>
    <Nav />
      <main>
        {children}
        <StickyMessage />
      </main>
      </>
  );
      
  
  
;
}