import p5 from 'p5';

const sketch = (p) => {
  
  let x_init = 10;
  let y_init = 10;
  let b_array = new Array(Math.floor(p.random(2, 10)));

  let frame = 0;
  let frame_rate = 1000;

  b_array.fill(0);
  b_array = b_array.map((_) => Math.floor(p.random(0, 10)));

  p.setup = () => {
    p.createCanvas(400, 400);
    p.background(200);
    p.frameRate(1000);
  };


  p.draw = () => {
    p.background(200);
    draw_array(x_init, y_init, b_array);
    draw_array_pop(x_init, y_init + 50, b_array);
    frame ++;
    if (frame > frame_rate){
      frame = 0;
    }
  };

  const draw_rect = (x, y, value) => {
    p.fill(255);
    p.stroke(0);
    p.rect(x, y, 30, 30);
    p.fill(0);
    p.textSize(20);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(value, x + 15, y + 15);
  }

  const draw_array = (x, y, array) => {
    for (let i = 0; i < array.length; i++) {
      draw_rect(x + i * 30, y, array[i], p);
    }
  }
 
  let i_m = 0;
  const draw_rect_destroy = (x, y, value) => {
    if (frame < frame_rate - 400){
      draw_rect(x + i_m*10, y, value);
      i_m ++;
    } else {
      i_m = 0;
    }
  }

  const draw_array_pop = (x, y, array) => {
    let array_copy = [...array];
    let pop_value = array_copy.pop();
    draw_array(x, y, array_copy);
    draw_rect_destroy(x + array_copy.length * 30, y, pop_value);
  } 
}

new p5(sketch, 'sketch-2');

