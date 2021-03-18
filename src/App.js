import React from "react";
import './App.css';
import PhotosList from "./components/photos-list";

function App() {
  return (
    <div className="container mt-4 shadow-lg p-3 mb-5 rounded w-90 bg-white content-wrapper">
        <h1 className="text-center title">Yanpix Photos</h1>
        <PhotosList/>
    </div>
  );
}

export default App;
