import { useContext } from "react";
import { AppContext } from "./AppContext";
export default function Two() {
  const { data } = useContext(AppContext);
  return (
    <div className="two">
      <h1>Two {data}</h1>
    </div>
  );
}
