"use strict";
const assert = require("assert");
const jam = require("../index");

describe("jam", function () {
  const key = "value";
  const array = [
    { value: "Ankara", label: "Turkey" },
    { value: "London", label: "United Kingdom" },
    { value: "Paris", label: "France" },
  ];

  it("should match map keys with array object's key", function () {
    const map = jam(array, key);
    array.forEach((row) => {
      assert.equal(row, map[row[key]]);
    });
  });
});
