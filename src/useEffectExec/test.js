import "./App.css";
import { useState } from "react";
function Header() {
  const colors = [
    { value: "red", color: "#ff0000" },
    { value: "green", color: "#00ff00" },
    { value: "blue", color: "#0000ff" },
    { value: "yellow", color: "#ffff00" },
    { value: "orange", color: "#ffa500" },
  ];
  const [selectDropdown, setSelectedDropdown] = useState("red")

  return (
    <>
      <p>Pick a Color</p>

      <select className={`dropdownBg${selectDropdown}Color`}>
        {colors.map((select) => (
          <option
            key={select.value}
            value={select.value}
            style={{ color: select.color }}
          >
            {select.value}
          </option>
        ))}
      </select>
      <input type="text"  />
    </>
  );
}

export default Header;
