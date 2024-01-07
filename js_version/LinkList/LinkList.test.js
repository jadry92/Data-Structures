const { LinkList } = require("./LinkList")

describe("Test suit for Link list",() => {
  test("creation and adding", () => {
    const lList_1 =  new LinkList(1)
    lList_1.add(2)    
    lList_1.add(3)
    lList_1.add(4)
    console.log(lList_1.toString())
  })
})