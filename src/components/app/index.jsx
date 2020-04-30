import React, { useState, useEffect } from "react";

export default function App({}) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.dir("fired!!!")
  }, [])

  return <div>
    <input
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
}