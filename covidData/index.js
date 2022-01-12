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
    cases: 2644481,
    hospitalized: 8241,
    recoveries: 2216562,
    death: 31061,
  }
];



// dailyOverview ->

document.getElementById("cases").innerHTML = dailyOverview[0].cases;
document.getElementById("hospitalized").innerHTML = dailyOverview[0].hospitalized;
document.getElementById("recoveries").innerHTML = dailyOverview[0].recoveries;
document.getElementById("death").innerHTML = dailyOverview[0].death;