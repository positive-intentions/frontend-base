import React from "react";
import { createRoot } from "react-dom/client";
import Example from "./atomic/pages/main"

const App = () => {
  return (
    <div>
      <Example>positive-intentions</Example>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
