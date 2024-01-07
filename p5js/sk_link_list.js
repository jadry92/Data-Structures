import p5 from "p5";

const sketch = (p) => {
  
  p.setup = () => {
    p.createCanvas(600, 400);
    p.background(255);
  };

  p.draw = () => {
    p.background(255);
    p.stroke(255);
  }
}

let myp5 = new p5(sketch);
