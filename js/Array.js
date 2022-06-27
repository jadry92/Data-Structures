class MyArray {
  constructor(){
    this.pointer = {}
    this.length = 0
  }

  append = (value) => {
    this.pointer[this.length] = value
    this.length ++
  }

  get() {
    
  }

  set() {

  }
}