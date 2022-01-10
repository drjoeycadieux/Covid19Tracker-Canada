/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

// dailyOverview[0] gets the first object, wrapped in braces {}.
// dailyOverview[1] would get the second object in braces.
// adding '.cases', '.newCases', etc. gets the property you want.

const dailyOverview = [
  {
    date: "2022-01-10",
    cases: 399058,
    newCases: 879,
    death: 11312,
    newDeath: 7,
  }
];



// dailyOverview ->

document.getElementById("cases").innerHTML = dailyOverview[0].cases;
document.getElementById("newCases").innerHTML = dailyOverview[0].newCases;
document.getElementById("death").innerHTML = dailyOverview[0].death;
document.getElementById("newDeath").innerHTML = dailyOverview[0].newDeath;