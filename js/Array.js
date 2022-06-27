class MyArray {
  constructor(){
    this.pointer = {}
    this.length = 0
  }

  push = (value) => {
    this.pointer[this.length] = value
    this.length ++
    return this.pointer
  }

  get = (index) => {
    return this.pointer[index]
  }

  getStr = () => {
    return this.pointer
  }

  set = (index, value) => {
    this.pointer[index] = value
    return this.pointer[index] 
  }
  
  slice = (index) => {
    if (this.pointer[index] !== undefined){
      const value = this.pointer[index]
      this.shiftIndex(index)
      return value
    }
    return null
  }

  pop = () => {
    const value = this.pointer[this.length-1]
    delete this.pointer[this.length-1]
    this.length--
    return value
  }

  shiftIndex = (index) => {
    if (this.pointer[index] !== undefined){
      for (let i = index; i < this.length-1; i++) {
        this.pointer[i] = this.pointer[i+1]
      }
      delete this.pointer[this.length-1]
      this.length--
    }
  }

  shift = (value) => {
    const oldPointer = {...this.pointer}
    for (let index = 0; index < this.length; index++ ){
      this.pointer[index+1] = oldPointer[index]
    }
    this.pointer[0] = value
    this.length++
  }

}


const anArray = new MyArray()
anArray.push(0)
anArray.push(1)
anArray.push(4)
anArray.push(3)
anArray.push(-100)
anArray.push(100)

console.log(anArray.getStr())
anArray.slice(5)
console.log(anArray.getStr())
anArray.slice(0)
console.log(anArray.getStr())
anArray.shift(213)
console.log(anArray.getStr())
anArray.shift(23)
console.log(anArray.getStr())
anArray.shift(13)
console.log(anArray.getStr())
console.log(anArray.get(0))