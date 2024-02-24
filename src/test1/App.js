import React, { useEffect, useState } from "react";

export default function App() {
  const [isDisplayed, setIsDisplayed] = useState(true);

  useEffect(() => {
    console.log("Parent is updated");
  }, [isDisplayed]);

  return (
    <div>
      <Parent isDisplayed={isDisplayed} />

      <button onClick={() => setIsDisplayed((display) => !display)}>
        BUTTON
      </button>
    </div>
  );
}

function Parent({ isDisplayed }) {
  return (
    <div>
      <h1>Parent</h1>

      {isDisplayed ? <Child1 /> : <Child2 />}
    </div>
  );
}

function Child1() {
  useEffect(() => {
    console.log("Child 1 is mounted");

    return () => {
      console.log("Child 1 is unmounted");
    };
  }, []);

  return (
    <div>
      <h2>Child 1</h2>
    </div>
  );
}

function Child2() {
  useEffect(() => {
    console.log("Child 2 is mounted");

    return () => {
      console.log("Child 2 is unmounted");
    };
  }, []);

  return <h3>Child 2</h3>;
}
