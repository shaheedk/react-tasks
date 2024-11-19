import React from "react";

export default function Task() {
  const [theme, setTheme] = React.useState(true);
  return (
    <div>   
      <div className={theme ? "red" : "green"}>
        <button onClick={() => setTheme(!theme)}>Change color</button>
      </div>
    </div>
  );
}
