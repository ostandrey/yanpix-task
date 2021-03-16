import React from "react";
import './App.css';
import AuthorsList from "./components/authors-list";

function App() {
  return (
    <div className="container-sm mt-4 shadow-lg p-3 mb-5 bg-body rounded">
        <h1 className="text-center">Radency employees</h1>
        <AuthorsList/>
    </div>
  );
}

export default App;
