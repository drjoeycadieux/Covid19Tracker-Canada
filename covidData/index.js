/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

// dailyOverview[0] gets the first object, wrapped in braces {}.
// dailyOverview[1] would get the second object in braces.
// adding '.cases', '.newCases', etc. gets the property you want.

const dailyOverview = [
  {
    date: "2021-09-15",
    cases: 399058, 
    deaths: 11312, 
    hospitalized: 1125
  }
];

// dailyOverview ->

document.getElementById("cases").innerHTML = dailyOverview[0].cases;
document.getElementById("deaths").innerHTML = dailyOverview[0].deaths;
document.getElementById("hospitalized").innerHTML = dailyOverview[0].hospitalized;