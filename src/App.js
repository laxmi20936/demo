import Child1 from "./Child1";
import Child2 from "./Child2";
import { useState } from "react";

export default function App() {
  const [ip, setIp] = useState("");
  return (
    <div className="App">
      <Child1 ip={ip} setIp={setIp} />
      <Child2 ip={ip} />
    </div>
  );
}
