import React from 'react';
import logo from './logo.svg';
import './App.css';


import { useEffect, useRef, useMemo } from "react";
import { SVG } from "@svgdotjs/svg.js";

 function App() {
  const SVGWrapperRefElement = useRef(null);
  const SVGContainer = useMemo(() => SVG(), []);

  const draw = () => {
    // SVGContainer.add(SVG('drawing').rect(100, 100).fill("#a06"));
    // const draw1 = SVG('drawing').size('100%', '100%');

		// draw1.viewbox(0, 0, '100%', '100%');
    // var draw2 = SVG().addTo('#someId').size('100%', '100%');
    // SVGContainer.add(SVG().rect(100, 100).fill("#a06"));
    // SVGContainer.add(SVG().addTo('app').size(300, 300));
    // const rect2 = () => {draw.rect(100, 100).attr({ fill: '#f06' });}
    // SVGContainer.add(rect2);
    const rect2 = () =>{SVG().rect(100, 100).fill("#a06");}
    SVGContainer.add(rect2);
    // SVGContainer.add(SVG().rect(100, 100).fill("#a06"));
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
    <div className="app" >
      <button onClick={draw}>Draw</button>
      <button onClick={clear}>Clear</button>
      <div ref={SVGWrapperRefElement} style = {{height:"100%", minHeight:"100%"}}/>
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
