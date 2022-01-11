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
    cases: 2593252,
    hospitalized: 6733,
    recoveries: 2157329,
    death: 30863,
  }
];



// dailyOverview ->

document.getElementById("cases").innerHTML = dailyOverview[0].cases;
document.getElementById("hospitalized").innerHTML = dailyOverview[0].hospitalized;
document.getElementById("recoveries").innerHTML = dailyOverview[0].recoveries;
document.getElementById("death").innerHTML = dailyOverview[0].death;