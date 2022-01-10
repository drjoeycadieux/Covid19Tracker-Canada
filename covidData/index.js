/*
 * @fileoverview Utilities for manipulating JavaScript code.
 * @author joey@tech-center.com (Joey Cadieux)
 */


var totalCases = 0;
var totalVaccinations = 0;
var hospitalizations = 0;


$(document).ready(() => {
  $.ajax({
    url: api_url + "https://api.covid19tracker.ca/summary"
  }).then(res => {
    var data = res.data[0];

    document.getElementById("totalCases").innerHTML = dailyOverview[0].totalCases;
    document.getElementById("totalVaccinations").innerHTML = dailyOverview[0].totalVaccinations;
    document.getElementById("hospitalizations").innerHTML = dailyOverview[0].hospitalizations;