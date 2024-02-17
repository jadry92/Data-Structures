import p5 from "p5";
import { LinkedListDrawer } from "./linked_list.js";

const sketch = (p) => {
  const actions_queue = [];
  let linked_list = new LinkedListDrawer(p);
  linked_list.generate_random(6);

  p.setup = () => {
    p.createCanvas(500, 100);
    p.background(200);
  };

  let action_drawing = 'none';

  p.draw = () => {
    print_queue(actions_queue);
    p.background(200);
    if (action_drawing === 'none'){
      if (actions_queue.length > 0) {
        const action = actions_queue.shift();
        action.operation(linked_list);
        action_drawing = action.name;
      }
    }
    const is_done = linked_list.drawing(action_drawing);
    if (is_done) {
      action_drawing = 'none';
      linked_list.mov_value = null;
      linked_list.mov_count = 0;
    }
  }

  set_on_click_call_back(() => {
    let value = get_value_input('add-value');
    if (!isNumeric(value)) {
      return;
    }
    value = parseInt(value)
    actions_queue.push({
      name: 'add',
      operation: (linked_list) => {
        linked_list.list.add(value)
        linked_list.mov_value = value;
      }
    });
  }, 'add');
  

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
}

new p5(sketch, "sketch");
