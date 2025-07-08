import React, { useState, useEffect, use }  from 'react'

export default function heightWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

//   window.addEventListener("resize", handleResize);
//   console.log("EVENT LISTENER ADDED");

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        };
    }, []);

    useEffect(() => {
        document.title = `${width} X ${height}`;
    }, [width, height]);
  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  )
}
