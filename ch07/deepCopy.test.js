import deepCopy from "./deepCopy";
describe("test deepCopy", () => {
  const before = { a: ["1", "2", [4, 5, 6]] };
  test("무야호", () => {
    expect(deepCopy(before)["a"][2]).not.toBe(before["a"][2]);
    expect(deepCopy(before)["a"][1]).toBe(before["a"][1]);
    
  });
});
