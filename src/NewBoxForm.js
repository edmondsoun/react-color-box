import React, { useState } from "react";

//render form that makes new box on submit
//inputs for width, height, bg color
//clear form inputs on submit

function NewBoxForm({ addBox }) {
  const initialState = {
    width: "",
    height: "",
    backgroundColor: "",
  };
  const [formData, setFormData] = useState(initialState);

  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }
  
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }



  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add a new box!</button>
    </form>
  );
}
export default NewBoxForm;
