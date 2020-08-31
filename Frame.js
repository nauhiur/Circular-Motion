import { VisHelper } from "./VisHelper.js";

export class Frame {
  constructor(width, height) {
    this.canvas = document.getElementById("cvs");
    this.context = this.canvas.getContext("2d");
    this.visHelper = new VisHelper(this.context);

    this.canvas.width = width;
    this.canvas.height = height;
    this.visHelper.setStrokeWidth();
    window.onresize = () => {
      this.canvas.width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      this.canvas.height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    };
  }

  render(data) {
    this.data = data;
    this.repaint();
  }

  repaint() {
    // this.clearCanvas();
    this.fadeCanvas();

    // TODO: Specific Drawing Process w/ this.data
    for (let particle of this.data.particles) {
      const lastPoint = { x: particle.x, y: particle.y };
      particle.update();
      const currPoint = { x: particle.x, y: particle.y };

      this.context.strokeStyle = particle.color;
      this.context.lineWidth = particle.radius;
      this.visHelper.strokeLine(
        lastPoint.x,
        lastPoint.y,
        currPoint.x,
        currPoint.y
      );
    }
  }

  fadeCanvas() {
    this.context.fillStyle = "rgba(255, 255, 255, 0.05)";
    this.context.fillRect(
      this.canvas.offsetLeft,
      this.canvas.offsetTop,
      this.canvas.width,
      this.canvas.height
    );
  }

  clearCanvas() {
    this.context.clearRect(
      this.canvas.offsetLeft,
      this.canvas.offsetTop,
      this.canvas.width,
      this.canvas.height
    );
  }
}
