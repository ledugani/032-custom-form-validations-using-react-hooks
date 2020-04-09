import React, { useState, useEffect } from "react";

export default function App({}) {
  const formDefaultValues = {
    email: "",
    fullName: ""
  }
  const [formValues, setFormValues] = useState({formDefaultValues});
  const { email, fullName } = formValues;

  useEffect(() => {
    console.dir(email, fullName)
  }, [formValues])

  function handleChange(e) {
    const target = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={email}
          name={"email"}
          onChange={handleChange}
          placeholder="Your email"
        />
      </div>

      <div>
        <input
          type="text"
          value={fullName}
          name={"fullName"}
          onChange={handleChange}
        placeholder="Full name"
        />
      </div>
    </div>
  )
}