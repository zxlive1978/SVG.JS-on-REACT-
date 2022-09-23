import React from 'react';
// import logo from './logo.svg';
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
    
    
    // SVGContainer.add(rect2);
    // SVGContainer.add(SVG().rect(100, 100).fill("#a06"));
    // SVGContainer.add(SVG().circle(200).fill("#f06"));
    // // SVGContainer.add(SVG().line(0, 0, 400, 150));
    // // SVGContainer.add(SVG().circle(300).fill("#b06"));
    // SVGContainer.polyline('50,0 100,50 50,100');
    // SVGContainer.add(SVG().polygon('0,0 100,50 50,100').fill('#a06').stroke({ width: 10 }));
    

    SVGContainer.size(900,900);
    SVGContainer.add(SVG().circle(200).fill("#f06"));
    SVGContainer.polyline('50,0 100,50 50,100');
    let rect = SVGContainer.rect(100, 100);
    let runner = rect.animate().animate({
      duration: 2000,
      delay: 1000,
      when: 'now',
      swing: true,
      times: 5,
      wait: 200
    }).attr({ fill: '#f03' });
    
    
// let rect = draw.rect(100, 100)
// let runner = rect.animate()
// runner.element() // returns or sets the element the runner is bound to
// runner.timeline() // returns or sets the timeline the runner will be / is scheduled on
// runner.animate() // for animation chaining. See element.animate()
// runner.schedule(timeline, delay, when) // schedules the runner on the timeline. Timeline can be skipped if already set
// runner.unschedule() // removes the runner from the timeline
// runner.loop(times, swing, wait) // loops the animation by `times` times with `wait` milliseconds time between each loop
// runner.queue(runOnceFn, runOnEveryStepFn) // Lets you chain functions which are not neccecarily animations
// runner.during(fn) // Lets you bind a function to every animation step
// runner.after(fn) // Lets you bind a function which is executed after the animation is finished
// runner.time() // returns or sets the runner time
// runner.duration() // returns the duration the runner will run
// runner.loops() // Lets you jump to a specific iteration of the runner e.g. 3.5 for 4th loop half way through
// runner.persist() // Make this runner persist on the timeline forever (true) or for a specific time. Usually a runner is deleted after execution to clean up memory.
// runner.position() // returns or sets the current position of the runner ignoring the wait times (between 0 and 1)
// runner.progress() // returns or sets the current position of the runner including the wait times (between 0 and 1)
// runner.step(dt) // step the runner by a certain time (for manually stepping trough animations)
// runner.reset() // set the runner back to zero time and all animations with it
// runner.finish() // steps the runner to its finished state
// runner.reverse() // execute the runner backwards
// runner.ease() // change the easing of the animation
// runner.active() // returns or sets the active state of the runner. Inactive runners are not executed

    
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
      <div  className="app2" ref={SVGWrapperRefElement} style = {{height:"100%", minHeight:"100%"}}/>
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
