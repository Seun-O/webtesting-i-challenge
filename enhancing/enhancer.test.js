const enhancer = require("./enhancer.js");
// test away!

describe(`succeed(item)`, () => {
  it(`Item's enhancement is increased +1`, () => {
    const expected = longSword.enhancement + 1;
    const actual = enhancer.succeed(longSword);
    expect(actual.enhancement).toBe(expected);
  });

  it(`Item's enhancement should not exceed 20`, () => {
    const actual = enhancer.succeed(longSword);
    expect(actual.enhancement).toBeLessThanOrEqual(20);
  });
});

// describe(`fail(item)`, () => {
//   it(`Item's enhancement decreased by function amount.`, () => {
//     const expected = {};
//     const actual = enhancer.fail();
//     expect(actual).toBe(expected);
//   });
// });

describe(`repair(item)`, () => {
  it(`Item's durability restored to 100`, () => {
    const actual = enhancer.repair(longSword);
    expect(actual).toHaveProperty(["durability"], 100);
  });
});

const longSword = {
  name: "Tetsaiga",
  enhancement: 0,
  durability: 50
};

// describe(`get(item)`, () => {
//   it(`Item's durability restored to 100`, () => {
//     const expected = {};
//     const actual = enhancer.get();
//     expect(actual).toBe(expected);
//   });
// });
