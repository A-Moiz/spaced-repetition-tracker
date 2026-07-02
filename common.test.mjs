import { getUserIds, createRevisionDates } from "./common.mjs";
import assert from "node:assert";
import test from "node:test";

test("User count is correct", () => {
  assert.equal(getUserIds().length, 5);
});

test("Returns 5 revision dates with correct spacing", () => {
  const result = createRevisionDates("Functions in JS", "2027-07-19");

  assert.deepEqual(result, [
    {
      topic: "Functions in JS",
      date: "2027-07-26",
    },
    {
      topic: "Functions in JS",
      date: "2027-08-19",
    },
    {
      topic: "Functions in JS",
      date: "2027-10-19",
    },
    {
      topic: "Functions in JS",
      date: "2028-01-19",
    },
    {
      topic: "Functions in JS",
      date: "2028-07-19",
    },
  ]);
});

test("Returns 10 revision dates with correct spacing", () => {
  const resultOne = createRevisionDates("Variables in Python", "2027-11-05");
  const resultTwo = createRevisionDates("Functions in Python", "2027-10-05");

  assert.deepEqual(resultOne, [
    {
      topic: "Variables in Python",
      date: "2027-11-12",
    },
    {
      topic: "Variables in Python",
      date: "2027-12-05",
    },
    {
      topic: "Variables in Python",
      date: "2028-02-05",
    },
    {
      topic: "Variables in Python",
      date: "2028-05-05",
    },
    {
      topic: "Variables in Python",
      date: "2028-11-05",
    },
  ]);

  assert.deepEqual(resultTwo, [
    {
      topic: "Functions in Python",
      date: "2027-10-12",
    },
    {
      topic: "Functions in Python",
      date: "2027-11-05",
    },
    {
      topic: "Functions in Python",
      date: "2028-01-05",
    },
    {
      topic: "Functions in Python",
      date: "2028-04-05",
    },
    {
      topic: "Functions in Python",
      date: "2028-10-05",
    },
  ]);
});
