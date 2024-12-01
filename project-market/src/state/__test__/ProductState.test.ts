import { state } from "../ProductState";

describe("State", () => {
  it("should have an empty array of products initially", () => {
    expect(state.allProducts).toEqual([]);
  });

  it("should have visibleProducts set to 4 initially", () => {
    expect(state.visibleProducts).toBe(4);
  });
});
