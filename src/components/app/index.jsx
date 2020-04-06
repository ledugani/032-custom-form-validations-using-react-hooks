import React, { useState } from "react";

export default function App({}) {
  const [email, setEmail] = useState("");

  return <div>
    <input
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
}