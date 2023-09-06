import "./styles.css";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Theme Toggle</h1>
        <Classic onToggle={() => document.body.classList.toggle("dark")} />
      </div>
      <span>Kumar Gaurav</span>
    </div>
  );
}
