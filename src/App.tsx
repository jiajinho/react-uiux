import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <Button onClick={() => console.log("!23")} disabled>
      Amigo!
    </Button>
  );
}

export default App;
