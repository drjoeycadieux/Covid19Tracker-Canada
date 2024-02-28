/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */

// dailyOverview[0] gets the first object, wrapped in braces {}.
// dailyOverview[1] would get the second object in braces.
// adding '.cases', '.newCases', etc. gets the property you want.

const dailyOverview = [
  {
    date: "2022-06-26",
    cases: 3922324,
    hospitalized: 3302,
    recoveries: 3622489,
    dosesadministered: 86173422,
    death: 41778,
    tests: 54958118,
  },
];



// dailyOverview ->

document.getElementById("cases").innerHTML = dailyOverview[0].cases;
document.getElementById("hospitalized").innerHTML = dailyOverview[0].hospitalized;
document.getElementById("recoveries").innerHTML = dailyOverview[0].recoveries;
document.getElementById("death").innerHTML = dailyOverview[0].death;
document.getElementById("tests").innerHTML = dailyOverview[0].tests;
document.getElementById("dosesadministered").innerHTML = dailyOverview[0].dosesadministered;