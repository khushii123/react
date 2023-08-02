import React, { useState } from "react";

const DyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    radio: "",
    password: "",
    rating: "",
    checkbox: "",
    dropdown: "",
  });

  const { name, email, radio, password, rating, checkbox, dropdown } = formData;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form data:", formData);
  };

  return (
    <div>
      <h1>Form</h1>
      <p>name: {name}</p>
      <input type="text" value={name} onChange={onInputChange} name="name" />
      <p>email: {email}</p>
      <input
        type="email"
        value={email}
        onChange={onInputChange}
        name="email"
      />
      <p>password: {password}</p>
      <input
        type="password"
        value={password}
        onChange={onInputChange}
        name="password"
      />
      <p>city: {dropdown}</p>
      <select value={dropdown} onChange={onInputChange} name="dropdown">
        <option value="bhopal">Bhopal</option>
        <option value="pune">Pune</option>
        <option value="indore">Indore</option>
      </select>
      <p>gender: {radio}</p>
      <input
        value="male"
        type="radio"
        checked={radio === "male"}
        onChange={onInputChange}
        name="radio"
      />
      Male
      <input
        value="female"
        type="radio"
        checked={radio === "female"}
        onChange={onInputChange}
        name="radio"
      />
      Female
      <p>hobbies: {checkbox}</p>
      <input
        value="outdoorgames"
        type="checkbox"
        checked={checkbox === "outdoorgames"}
        onChange={onInputChange}
        name="checkbox"
      />
      Outdoor Games
      <input
        value="indoorgames"
        type="checkbox"
        checked={checkbox === "indoorgames"}
        onChange={onInputChange}
        name="checkbox"
      />
      Indoor Games
      <p>rating: {rating}</p>
      <input
        name="rating"
        value={rating}
        type="range"
        min="1"
        max="10"
        onChange={onInputChange}
        required
      />
<button onClick={handleSubmit}>SUBMIT </button>
    </div>
  );
};

export default DyForm;
