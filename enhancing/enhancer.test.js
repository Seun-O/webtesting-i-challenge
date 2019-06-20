const enhancer = require("./enhancer.js");
// test away!

// Test Weapons to run enhancer functions on

const longSword = {
  name: "Long Sword 1",
  enhancement: "10",
  durability: "25"
};

const greatSword = {
  name: "Great Sword 1",
  enhancement: 15,
  durability: 50
};

const hammer = {
  name: "Hammer 1",
  enhancement: 20,
  durability: 75
};

const dualBlades = {
  name: "Dual Blades 1",
  enhancement: 17,
  durability: 100
};

const invalidWeapon = {
  name: "Broken Weapon",
  enhancement: 55,
  durability: 1000
};

/**
 *
 * Expects: Item object {name: String, enhancement: Integer, durability: Integer}
 * Return: New Object {...object, durability: 100}
 */

describe(`repair(item)`, () => {
  it(`Item should be a new object`, () => {
    expect(enhancer.repair(longSword)).not.toBe(longSword);
  });

  it(`Item's durability restored to 100`, () => {
    expect(enhancer.repair(longSword).durability).toBe(100);
    expect(enhancer.repair(longSword)).toHaveProperty(["durability"], 100);
  });
});

/*
 * Expects: Item object {name: String, enhancement: Integer, durability: Integer}
 * Return: New Object {...object, enhancement: + 1}
 * enhancement increases by 1.
 * enhancement level is 20, the enhancement level is not changed.
 * durability of the item is not changed.
 */

describe(`succeed(item)`, () => {
  it(`Item should be a new object`, () => {
    expect(enhancer.succeed(greatSword)).not.toBe(greatSword);
  });
  it(`Item's enhancement is increased + 1`, () => {
    expect(enhancer.succeed(greatSword).enhancement).toBe(17);
  });

  it(`Item's enhancement should not exceed 20`, () => {
    expect(enhancer.succeed(hammer).enhancement).toBeLessThanOrEqual(20);
    expect(enhancer.succeed(hammer).enhancement).toBe(20);
  });
});

/**
 *
 * Expects: Item object {name: String, enhancement: Integer, durability: Integer}
 * Return: New Object {...object, durability: 100}
 * If the item's enhancement < than 15, durability of the item is decreased by 5.
 * If the item's enhancement is >= 15 or more, durability of the item is decreased by 10.
 * If the item's enhancement level is > 16, enhancement level decreases by 1 && durability decreased by 10.
 */

describe(`fail(item)`, () => {
  it(`Item should be a new object`, () => {
    expect(enhancer.fail(invalidWeapon)).not.toBe(invalidWeapon);
  });
  it(`Item's durability decreased by 5 if enhancement < 15.`, () => {
    expect(enhancer.fail(longSword).durability).toBe(20);
  });

  it(`Item's durability decreased by 10 if enhancement >= 15.`, () => {
    expect(enhancer.fail(greatSword).durability).toBe(40);
    expect(enhancer.fail(hammer).durability).toBe(65);
  });

  it(`Item's enhancement decreased by 1 if enhancement > 16.`, () => {
    expect(enhancer.fail(dualBlades).durability).toBe(90);
    expect(enhancer.fail(dualBlades).enhancement).toBe(16);
  });
});

/**
 *
 * Expects: Item object {name: String, enhancement: Integer, durability: Integer}
 * Return: New Object {...object, durability: 100}
 */

// describe(`get(item)`, () => {
//   it(`Item's durability restored to 100`, () => {
//     const expected = {};
//     const actual = enhancer.get();
//     expect(actual).toBe(expected);
//   });
// });
