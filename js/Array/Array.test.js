const { MyArray } = require("./Array")

describe("This suit test the Array data structure",() => {
  const anArray = new MyArray()
  test("creation and adding", () => {
    
    anArray.push(1)
    anArray.push(4)
    anArray.push(3)
    anArray.push(-100)
    anArray.push(100)
    const valueExpect = {
      '0':1,
      '1':4,
      '2':3,
      '3':-100,
      '4':100,
    }
    expect(anArray.getPointer()).toEqual(valueExpect)

  })
  test("slice", () => {
    const value = anArray.slice(2)
    const valueExpect = {
      '0':1,
      '1':4,
      '2':-100,
      '3':100,
    }
    expect(anArray.getPointer()).toEqual(valueExpect)
    expect(value).toBe(3)
  })

  test("pop", () => {
    const value = anArray.pop(2)
    const valueExpect = {
      '0':1,
      '1':4,
      '2':-100,
    }
    expect(anArray.getPointer()).toEqual(valueExpect)
    expect(value).toBe(100)
  })

  test("shift", () => {
    anArray.shift(-50)
    const valueExpect = {
      '0':-50,
      '1':1,
      '2':4,
      '3':-100,
    }
    expect(anArray.getPointer()).toEqual(valueExpect)
  })
})