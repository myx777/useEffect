import Details from "./components/Details";
import List from "./components/List";
import "./app.css";
import { useState } from "react";

function App() {
  const [id, setId] = useState<number>();

  const currentId = (id: number) => {
    setId(id);
  };

  return (
    <div className="container">
      <ul id="user-list">
        <List onCurrentId={currentId} />
      </ul>

      <div id="user-details">
        <Details id={id} />
      </div>
    </div>
  );
}

export default App;
