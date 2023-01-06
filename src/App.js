import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Texas Rail</h1>
      </header>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
