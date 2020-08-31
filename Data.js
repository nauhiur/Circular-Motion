class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.center = { x: x, y: y };
    this.newCenter = {x: x, y: y};
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distFromCenter = Math.floor(Math.random() * 70) + 70;

    this.update();
  }

  update() {
    this.radians += this.velocity;

    this.center.x += (this.newCenter.x - this.center.x) * 0.05;
    this.center.y += (this.newCenter.y - this.center.y) * 0.05;

    this.x = this.center.x + Math.cos(this.radians) * this.distFromCenter;
    this.y = this.center.y + Math.sin(this.radians) * this.distFromCenter;
  }
}

export class Data {
  constructor(n) {
    this.particles = new Array(n);
    this.colors = ["#43640b", "#80a71a", "#afca54", "#d3dcc8", "#a4bfd1"];
    this.init();
  }

  init() {
    for (let i = 0; i < this.particles.length; i++) {
      const radius = Math.random() * 3 + 1;
      this.particles[i] = new Particle(
        250,
        250,
        radius,
        this.colors[Math.floor(Math.random() * this.colors.length)]
      );
    }
  }
}
