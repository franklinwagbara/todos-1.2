import { useState } from "react";
import "./styles.css";

export default function App() {
    const [open, setOpen] = useState(false);
    
    console.log(open);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
