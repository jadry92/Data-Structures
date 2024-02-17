export class MyArray {
  constructor(p5, x=10, y=40) {
    this.x = x;
    this.y = y; 
    this.p5 = p5;
    this.array = [];
    this.mov_value = null;
    this.mov_count = 0;
    this.max_mov_count = 18;
  }

  generate_array(n){
    let size = n < 1 ? 2 : n;
      
    const array = new Array(size).fill(0);
    this.array = array.map(() => Math.floor(this.p5.random(0, 10)));
  } 

  drawing(action_drawing) {
    if (action_drawing === 'none'){
      return this.draw_array(this.x, this.y, this.array);
    } else if (action_drawing === 'pop') {
      return this.draw_array_pop(this.x, this.y, this.array);
    } else if (action_drawing === 'push'){
      return this.draw_array_push(this.x, this.y, this.array);
    } else if (action_drawing === 'get'){
      return this.draw_array_get(this.x, this.y, this.array);
    } else if (action_drawing === 'set'){
      return this.draw_array_set(this.x, this.y, this.array);
    }
  }

  draw_rect(x, y, value){
    this.p5.fill(255);
    this.p5.stroke(0);
    this.p5.rect(x, y, 30, 30);
    this.p5.fill(0);
    this.p5.textSize(20);
    this.p5.textAlign(this.p5.CENTER, this.p5.CENTER);
    this.p5.text(value, x + 15, y + 15);
  }

  draw_array(x, y, array){
    for (let i = 0; i < array.length; i++) {
      this.draw_rect(x + i * 30, y, array[i]);
    }
    return false;
  }

  draw_rect_remove(x, y, value){
    if (this.mov_count < this.max_mov_count){
      this.draw_rect(x + this.mov_count*5, y, value);
      this.mov_count++;
      return false;
    }
    return true; 
  }

  draw_rect_insert(x, y, value){
    if (this.mov_count < this.max_mov_count){
      this.draw_rect(x - this.mov_count*5, y, value);
      this.mov_count++;
      return false;
    }
    return true; 
  }

  draw_array_push(x, y){
    const new_array = this.array.slice(0, this.array.length - 1);
    this.draw_array(x, y, new_array);
    return this.draw_rect_insert(x + (new_array.length + 3) * 30, y, this.mov_value);
  }

  draw_array_pop(x, y){
    this.draw_array(x, y, this.array);
    return this.draw_rect_remove(x + this.array.length * 30, y, this.mov_value);
  }

  draw_arrow(x, y){
    const a = 15;
    const x2 = x - a/2;
    const y2 = y - (Math.sqrt(3)*a)/2;
    const x3 = x + a/2;
    const y3 = y - (Math.sqrt(3)*a)/2;
    this.p5.triangle(x,y,x2,y2,x3,y3);
  }
  draw_rect_down(x, y, value){
    this.draw_rect(x, y + this.mov_count*2, value);
    if (this.mov_count < this.max_mov_count){
      this.mov_count++;
      return false;
    }
    return true; 
  }

  draw_array_get(x, y){
    this.draw_array(x, y, this.array);
    this.draw_arrow((x+15)+ 30*this.mov_value.idx, y);
    return this.draw_rect_down(x + 30*this.mov_value.idx, y , this.mov_value.value);

  }

  draw_rect_up(x, y, value){
    this.draw_rect(x, y - this.mov_count*2, value);
    if (this.mov_count < this.max_mov_count){
      this.mov_count++;
      return false;
    }
    return true; 
  }

  draw_array_set(x, y){
    this.draw_array(x, y, this.mov_value.old_array);
    this.draw_arrow((x+15)+ 30*this.mov_value.idx, y);
    return this.draw_rect_up(x + 30*this.mov_value.idx, y+30*1.2 , this.mov_value.value);
  }
}

