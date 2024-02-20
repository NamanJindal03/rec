import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [courseName, setCourseName] = useState("");

  function handleNameChange(e) {
    console.log("ashdueh");
    setName(e.target.value);
  }
  function handleCourseChange(e) {
    setCourseName(e.target.value);
  }

  return (
    <>
      {/* <input type="text" onChange={handleNameChange}/> */}
      <input type="text" value={name} onChange={handleNameChange} />
      {/*  */}
      <select value={courseName} onChange={handleCourseChange}>
        <option value="" disabled>
          courseSelection
        </option>
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
        <option value="mathematics">Mathematics</option>
      </select>
    </>
  );
}


/* select -> 
    Course Selection  
    English 
    Hindi
    Mathematics

    you folks need to make a controlled component for the above
*/
