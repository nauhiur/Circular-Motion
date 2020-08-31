import { Frame } from "./Frame.js";
import { Data } from "./Data.js";

document.title = "Circular Motion";

export class Visualizer {
  constructor(width, height) {
    this.frame = new Frame(width, height);

    // TODO: Initialize Data
    this.data = new Data(55);

    // TODO: Add Event Listeners
    this.addKeyListener();
    this.addMouseListener();

    this.run();
  }

  run(interval = 10) {
    // TODO: Animation Logic
    setInterval(() => {
      this.frame.render(this.data);
    }, interval);
  }

  addMouseListener() {
    // TODO
    document.onmousemove = (e) => {
      this.data.particles.forEach(
        (particle) => (particle.newCenter = { x: e.clientX, y: e.clientY })
      );
    };
  }

  addKeyListener() {
    // TODO
  }
}
