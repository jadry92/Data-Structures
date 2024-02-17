import p5 from 'p5';
import { MyArray } from './array.js';


const sketch = (p) => {
  
  const actions_queue = [];
  let array = new MyArray(p)
  array.generate_array(6);


  p.setup = () => {
    p.createCanvas(300, 110);
    p.background(200);
    p.frameRate(10)
  };

  let action_drawing = 'none';
  p.draw = () => {
    print_queue(actions_queue);
    p.background(200);
    if (action_drawing === 'none'){
      if (actions_queue.length > 0) {
        console.log(actions_queue);
        const action = actions_queue.shift();
        action.operation(array);
        action_drawing = action.name;
      }
    }
    const is_done = array.drawing(action_drawing);
    if (is_done) {
      action_drawing = 'none';
      array.mov_value = null;
      array.mov_count = 0;
    }
  };


  const action_push = () => {
    let value = get_value_input('push-value')
    if (!isNumeric(value)) {
      return;
    }
    value = parseInt(value);

    actions_queue.push({
      name: 'push',
      operation: (my_array) => {
        my_array.array.push(value);
        my_array.mov_value = value;
      }
    });
  }
  
  const action_get = () => {
    let index = get_value_input('get-id');
    if (!isNumeric(index)) {
      return;
    }
    index = parseInt(index);
    if (index < 0 || index >= array.array.length) {
      return;
    }
    console.log(index);
    actions_queue.push({
      name: 'get',
      operation: (my_array) => {
        my_array.mov_value = {
          idx: index,
          value : my_array.array[index]
      };
    }});
  }

  const action_set = () => {
    const value = parseInt(get_value_input('set-id'));
    if (value === '') {
      return;
    }

    const index = parseInt(get_value_input('set-value'));
    if (index === '') {
      return;
    }

    if (index < 0 || index >= array.array.length) {
      return;
    }

    actions_queue.push({
      name: 'set',
      operation: (my_array) => {
        my_array.mov_value = {
          idx: index,
          value : value,
          old_array : [...my_array.array]
        }; 
        my_array.array[index] = value;
      }
    });
  }

  const action_pop = () => {
    actions_queue.push({
      name: 'pop',
      operation: (my_array) => {
        my_array.mov_value = my_array.array.pop();
      }
    });
  }

  function get_value_input(action) {
    const element = document.getElementById(action);
    const value = element.value;
    element.value = '';
    return value;
  }
  function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
      !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }
  function set_on_click_call_back(callback, element_id) {
    const element = document.getElementById(element_id);
    element.addEventListener('click', callback);
  }

  function print_queue(queue) {
    const queue_element = document.getElementById('queue');
    let queue_str = ""
    queue.forEach(action => {
      queue_str += `<li>${action.name}</li>`;
    });
    queue_element.innerHTML = queue_str;
  }

  set_on_click_call_back(action_pop, 'pop');
  set_on_click_call_back(action_push, 'push');
  set_on_click_call_back(action_get, 'get-array');
  set_on_click_call_back(action_set, 'set-array');
}

new p5(sketch, 'sketch');

