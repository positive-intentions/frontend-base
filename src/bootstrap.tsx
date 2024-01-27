import React from "react";
import { createRoot } from "react-dom/client.js";
import Example from "./stories/components/Example.tsx";

const App = () => {
  return (
    <div>
      <Example>positive-intentions</Example>
    </div>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);
