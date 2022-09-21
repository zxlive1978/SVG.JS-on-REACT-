import React from 'react';
import logo from './logo.svg';
import './App.css';


import { useEffect, useRef, useMemo } from "react";
import { SVG } from "@svgdotjs/svg.js";

 function App() {
  const SVGWrapperRefElement = useRef(null);
  const SVGContainer = useMemo(() => SVG(), []);

  const draw = () => {
    SVGContainer.add(SVG().rect(100, 100).fill("#f06"));
  };

  const clear = () => {
    SVGContainer.clear();
  };

  useEffect(() => {
    if (
      SVGWrapperRefElement &&
      SVGWrapperRefElement?.current &&
      SVGWrapperRefElement?.current?.children.length < 1
    ) {
      SVGContainer.addTo(SVGWrapperRefElement?.current);
    }
  }, [SVGWrapperRefElement, SVGContainer]);

  return (
    <div className="app">
      <button onClick={draw}>Draw</button>
      <button onClick={clear}>Clear</button>
      <div ref={SVGWrapperRefElement} />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Reactииирпоор
//           рррjkhjkhk
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
