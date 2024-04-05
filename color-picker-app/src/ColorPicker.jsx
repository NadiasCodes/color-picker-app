import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("");

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color: {color}</p>
        <label>Select a Color:</label>
        <input type = "color" value = {color} onChange={handleColorChange}/>
      </div>
    </div>
  );
};

export default ColorPicker;
