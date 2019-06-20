module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  if (item.enhancement === 20) {
  } else {
    item.enhancement += 1;
  }
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}

const longSword = {
  name: "Tetsaiga",
  enhancement: 15,
  durability: 50
};
